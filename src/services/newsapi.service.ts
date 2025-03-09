import { IArticleItem } from '@/utils/querytypes';
import axios from 'axios';
import { snakeCase } from 'lodash';

interface IApiResponse {
  status: string;
  totalResults: number;
  articles: IArticleItem[];
}

interface IArticleResponse {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

function transformArticle(item: IArticleResponse): IArticleItem {
  return {
    id: snakeCase(item.title),
    title: item.title,
    description: item.description,
    publishedAt: item.publishedAt,
    source: item.source.name,
    category: 'general',
    bannerUrl: item.urlToImage,
    author: item.author,
    url: item.url,
    content: item.content,
  };
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NEWS_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.config.url === '/top-headlines/sources') {
      return response.data.sources;
    }

    const articles = response?.data?.articles?.map((item: IArticleResponse) =>
      transformArticle(item)
    );

    return { ...response.data, articles };
  },
  (error) => {
    return Promise.reject(
      error.response?.data || { message: 'Something went wrong' }
    );
  }
);

export async function getFromNewsApi(params?: {
  query?: string;
  from?: string;
  to?: string;
  category?: string;
  source?: string;
  page?: number;
}) {
  const { query: q, from, to, category, source, page } = params || {};
  const conditionalFilters = category
    ? { category }
    : { sources: source || 'bbc-news' };

  const res = await axiosInstance.get<IApiResponse>('/top-headlines', {
    params: {
      apiKey: import.meta.env.VITE_NEWS_API_KEY,
      sortBy: 'popularity',
      from,
      to,
      q,
      ...conditionalFilters,
      page,
      pageSize: 10,
    },
  });

  return res as unknown as IApiResponse;
}

interface IOption {
  id: string;
  name: string;
}
export async function getSources(params?: { category?: string }) {
  const { category } = params || {};
  const res = await axiosInstance.get<IOption[]>('/top-headlines/sources', {
    params: {
      apiKey: import.meta.env.VITE_NEWS_API_KEY,
      category,
      page: 1,
      pageSize: 10,
    },
  });

  return res as unknown as IOption[];
}
