import NewsCard from './NewsCard';

function NewsList() {
  return (
    <div>
      <ul>
        {[].map((item: IArticleItem) => (
          <li key={item.id}>
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
