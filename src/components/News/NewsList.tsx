import { useMemo } from 'react';
import useGetArticlesFromNewsApi from '../../hooks/useGetArticlesFromNewsApi';
import useGuardianNews from '../../hooks/useGuardianNews';
import NewsCard from './NewsCard';

function NewsList() {
  const { data } = useGetArticlesFromNewsApi();
  const { data: gData } = useGuardianNews();

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
