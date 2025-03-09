export interface IArticleItem {
  id: string;
  title: string;
  description?: string;
  publishedAt: string;
  source: string;
  category: string;
  bannerUrl: string;
  author: string | null;
  url: string;
  content?: string;
}

export interface IApiResponse {
  totalArticles: number;
  articles: IArticleItem[];
}

export interface IArticleMultimedia {
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

export interface IArticleByline {
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

export interface IArticleItemRaw {
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
