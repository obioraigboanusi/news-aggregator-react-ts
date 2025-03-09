import axios from 'axios';
import { snakeCase } from 'lodash';

interface IApiResponse {
  totalArticles: number;
  articles: IArticleItem[];
}

interface IArticleResponse {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

function transformArticle(item: IArticleResponse): IArticleItem {
  return {
    id: snakeCase(item.title),
    title: item.title,
    description: item.description,
    publishedAt: item.publishedAt,
    source: item.source.name,
    category: 'general',
    bannerUrl: item.image,
    author: null,
    url: item.url,
    content: item.content,
  };
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NYTIMES_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    const articles = response?.data?.articles?.map((item: IArticleResponse) =>
      transformArticle(item)
    );

    return { ...response.data, articles };
  },
  (error) => {
    //     console.error('API Error:', error?.response?.data || error.message);

    return Promise.reject(
      error.response?.data || { message: 'Something went wrong' }
    );
  }
);

export async function getFromNYTimes(params?: {
  query?: string;
  startDate?: string;
  endDate?: string;
  size?: number;
  page?: number;
  category?: string;
}) {
  const {
    //     query: q,
    //     startDate: from,
    //     endDate: to,
    //     size: max,
    //     page,
    //     category,
  } = params || {};
  //   console.log({ key: import.meta.env.VITE_GNEWS_API_KEY });
  const res = await axiosInstance.get<IApiResponse>('/top-headlines', {
    params: {
      'api-key': import.meta.env.VITE_NYTIMES_API_KEY,
      //       lang: 'en',
      //       category,
      //       //       sortBy: 'popularity',
      //       //       sources: 'bbc-news',
      //       from,
      //       to,
      //       q,
      //       page,
      //       max,
    },
  });

  return res as unknown as IApiResponse;
}
