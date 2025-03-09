import axios from 'axios';

interface IApiResponse {
  totalArticles: number;
  articles: IArticleItem[];
}

interface IArticleMultimedia {
  rank: number;
  subtype: string;
  caption: string | null;
  credit: string | null;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: Record<string, unknown>;
  subType: string;
  crop_name: string;
}

interface IArticleByline {
  original: string;
  person: Array<{
    firstname: string;
    middlename: string | null;
    lastname: string;
    qualifier: string | null;
    title: string | null;
    role: string;
    organization: string;
    rank: number;
  }>;
  organization: string | null;
}

interface IArticleItemRaw {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  print_section: string;
  print_page: string;
  source: string;
  multimedia: IArticleMultimedia[];
  headline: {
    main: string;
    kicker: string;
    content_kicker: string | null;
    print_headline: string;
    name: string | null;
    seo: string | null;
    sub: string | null;
  };
  keywords: Array<{
    name: string;
    value: string;
    rank: number;
    major: string;
  }>;
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: IArticleByline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}

function transformArticle(item: IArticleItemRaw): IArticleItem {
  return {
    id: item._id,
    title: item.headline.main,
    publishedAt: item.pub_date,
    source: 'New York Times',
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

interface IArticleItem {
  id: string;
  title: string;
  description?: string;
  publishedAt: string;
  source: string;
  category: string;
  bannerUrl: string;
  author: string;
  url: string;
  content?: string;
}

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
  const {
    query: q,
    to,
    from,
    //     size: max,
    //     page,
    category,
  } = params || {};
  //   console.log({ key: import.meta.env.VITE_GNEWS_API_KEY });
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
      //       page,
      //       max,
    },
  });

  return res as unknown as IApiResponse;
}
