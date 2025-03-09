import useArticles from '@/hooks/useArticles';
import NewsCard from './NewsCard';

function NewsList() {
  const { articles } = useArticles();
  return (
    <div>
      <ul>
        {articles?.map((item: IArticleItem) => (
          <li key={item.id} className="border-b border-gray-200 pe-5 ">
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
