import { useMemo } from 'react';
import useNewsApi from '@/hooks/useNewsApi';
import useGNews from '@/hooks/useGNews';
import NewsCard from './NewsCard';
import useNYTimes from '@/hooks/useNYTimes';

function NewsList() {
  const { data } = useNewsApi();
  const { data: gData } = useGNews();
  const { data: nytData } = useNYTimes();

  const articles = useMemo(
    () => [
      ...(data?.articles || []),
      ...(gData?.articles || []),
      ...(nytData?.articles || []),
    ],
    [data?.articles, gData?.articles, nytData?.articles]
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
