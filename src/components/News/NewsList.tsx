import useArticles from '@/hooks/useArticles';
import NewsCard from './NewsCard';
import ArticleCardLoader from '../ArticleCardLoader';

function NewsList() {
  const { articles, isLoading } = useArticles();
  if (isLoading) {
    return (
      <ul>
        {Array.from({ length: 10 }).map((item, i) => (
          <ArticleCardLoader key={'loader' + i} />
        ))}
      </ul>
    );
  }
  return (
    <div>
      <ul className="grid grid-cols-1">
        {articles?.map((item: IArticleItem) => (
          <li key={item.id} className="border-b border-gray-200 md:pe-5 ">
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
