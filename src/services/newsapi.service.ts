import axios from 'axios';
import { snakeCase } from 'lodash';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NEWS_API_URL,
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
  }, // Return only the data part
  (error) => {
    console.error('API Error:', error?.response?.data || error.message);

    return Promise.reject(
      error.response?.data || { message: 'Something went wrong' }
    );
  }
);

export async function getFromNewsApi(params?: {
  query?: string;
  startDate?: string;
}) {
  const { query: q, startDate: from } = params || {};

  const res = await axiosInstance.get<IApiResponse>('/top-headlines', {
    params: {
      apiKey: import.meta.env.VITE_NEWS_API_KEY,
      sortBy: 'popularity',
      sources: 'bbc-news',
      from,
      q,
      page: 1,
      pageSize: 20,
    },
  });

  return res as unknown as IApiResponse;
}

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
