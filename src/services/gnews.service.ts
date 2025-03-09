import { IArticleItem } from '@/utils/querytypes';
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
  baseURL: import.meta.env.VITE_GNEWS_API_URL,
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

export async function getFromGNewsApi(params?: {
  query?: string;
  from?: string;
  to?: string;
  size?: number;
  page?: number;
  category?: string;
  source?: string;
}) {
  const {
    query: q,
    from,
    to,
    size: max,
    page,
    category,
    source: sources,
  } = params || {};

  const res = await axiosInstance.get<IApiResponse>('/top-headlines', {
    params: {
      apikey: import.meta.env.VITE_GNEWS_API_KEY,
      lang: 'en',
      category,
      //       sortBy: 'popularity',
      sources,
      from,
      to,
      q,
      page,
      max,
    },
  });

  return res as unknown as IApiResponse;
}
