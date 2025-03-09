import {
  IApiResponse,
  IArticleItem,
  IArticleItemRaw,
} from '@/utils/querytypes';
import axios from 'axios';

function transformArticle(item: IArticleItemRaw): IArticleItem {
  return {
    id: item._id,
    title: item.headline.main,
    publishedAt: item.pub_date,
    source: item.source,
    category: 'general',
    bannerUrl:
      'https://www.nytimes.com/' +
        item.multimedia.find((media) => media.subtype === 'googleFourByThree')
          ?.url || '',
    author: item.byline.original,
    url: item.web_url,
  };
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NYTIMES_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  ({ data }) => {
    const articles: IArticleItem[] = data?.response?.docs.map(
      (item: IArticleItemRaw) => transformArticle(item)
    );

    return { ...data?.response.meta, articles };
  },
  (error) => {
    return Promise.reject(
      error.response?.data || { message: 'Something went wrong' }
    );
  }
);

export async function getFromNYTimes(params?: {
  query?: string;
  from?: string;
  to?: string;
  size?: number;
  page?: number;
  category?: string;
}) {
  const { query: q, to, from, size: max = 10, page, category } = params || {};

  const res = await axiosInstance.get<IApiResponse>('', {
    params: {
      'api-key': import.meta.env.VITE_NYTIMES_API_KEY,
      //       lang: 'en',
      category,
      //       //       sortBy: 'popularity',
      //       //       sources: 'bbc-news',
      from,
      to,
      q,
      page,
      max,
    },
  });

  return res as unknown as IApiResponse;
}
