import { useMemo } from 'react';
import useNewsApi from '../../hooks/useNewsApi';
import useGNews from '../../hooks/useGNews';
import NewsCard from './NewsCard';

function NewsList() {
  const { data } = useNewsApi();
  const { data: gData } = useGNews();

  const articles = useMemo(
    () => [...(data?.articles || []), ...(gData?.articles || [])],
    [data?.articles, gData?.articles]
  );

  return (
    <div>
      <ul>
        {articles?.map((item: IArticleItem) => (
          <li key={item.id}>
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
