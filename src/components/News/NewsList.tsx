import useGeArticlesFromNewsApi from '../../hooks/useGeArticlesFromNewsApi';
import NewsCard from './NewsCard';

function NewsList() {
  const { data, isLoading } = useGeArticlesFromNewsApi();

  return (
    <div>
      <ul>
        {data?.articles?.map((item: IArticleItem) => (
          <li key={item.id}>
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
