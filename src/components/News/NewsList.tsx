import useArticles from '@/hooks/useArticles';
import NewsCard from './NewsCard';
import ArticleCardLoader from '../ArticleCardLoader';
import { IArticleItem } from '@/utils/querytypes';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useEffect } from 'react';
import { isEmpty } from 'lodash';

function NewsList() {
  const { articles, isLoading, loadMore, hasMore } = useArticles();
  const { listRef, isFetching, stopFetching } = useInfiniteScroll(
    loadMore,
    hasMore
  );

  useEffect(() => {
    if (!isLoading) {
      stopFetching();
    }
  }, [isLoading]);

  return (
    <div>
      <ul ref={listRef} className="grid grid-cols-1">
        {articles.map((item: IArticleItem) => (
          <li key={item.id} className="border-b border-gray-200 md:pe-5">
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
      {isEmpty(articles) && !isLoading && !isFetching && (
        <p className="mt-20 text-center italic">No articles found.</p>
      )}
      {isLoading && (
        <ul>
          {Array.from({ length: 10 }).map((_, i) => (
            <ArticleCardLoader key={'loader' + i} />
          ))}
        </ul>
      )}
      {isFetching && (
        <ul>
          {Array.from({ length: 5 }).map((_, i) => (
            <ArticleCardLoader key={'loader' + i} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default NewsList;
