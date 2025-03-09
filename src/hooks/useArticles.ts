import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { parseAsString, useQueryState, useQueryStates } from 'nuqs';
import { getDateRange } from '@/config/timelineMap';
import { IArticleItem } from '@/utils/querytypes';
import { getFromGNewsApi } from '@/services/gnews.service';
import { getFromNYTimes } from '@/services/nytimes.service';
import { getFromNewsApi } from '@/services/newsapi.service';

const useArticles = () => {
  const [queryValue] = useQueryState('query');
  const [categoryValue] = useQueryState('category');
  const [timeline] = useQueryState('timeline');
  const [sourceValue] = useQueryState('source');
  const [timeRange] = useQueryStates({
    to: parseAsString,
    from: parseAsString,
  });

  const [query, setQuery] = useState<string>();
  const [articles, setArticles] = useState<IArticleItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const debouncedSetQuery = debounce((q) => setQuery(q), 500);
    debouncedSetQuery(queryValue?.trim() || undefined);
    return () => debouncedSetQuery.cancel();
  }, [queryValue]);

  const { to: endDate, from: startDate } = timeline
    ? getDateRange(timeline)
    : timeRange;

  const category = categoryValue || undefined;
  const to = endDate || undefined;
  const from = startDate || undefined;
  const source = sourceValue || undefined;

  const fetchArticles = async (pageNum: number) => {
    setIsLoading(true);
    console.log('1');
    try {
      const results = await Promise.allSettled([
        getFromNewsApi({ query, category, to, from, source, page: pageNum }),
        getFromGNewsApi({ query, category, to, from, source, page: pageNum }),
        getFromNYTimes({ query, category, to, from, page: pageNum }),
      ]);
      console.log(2);
      const successfulResults = results
        .filter((res) => res.status === 'fulfilled')
        .map(
          (res) => (res as PromiseFulfilledResult<any>).value?.articles || []
        );
      console.log(3);
      const newArticles = successfulResults.flat();
      console.log(4);
      setArticles((prev) =>
        pageNum === 1 ? newArticles : [...prev, ...newArticles]
      );
      setHasMore(newArticles.length > 0);
      console.log('first');
    } catch (error) {
      setHasMore(false);
      console.log('Caught');
    } finally {
      setIsLoading(false);
      console.log('finalised');
    }
  };

  useEffect(() => {
    fetchArticles(1);
  }, [query, category, to, from, source]);

  const loadMore = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        fetchArticles(nextPage);
        return nextPage;
      });
    }
  };

  return { articles, isLoading, loadMore, hasMore };
};

export default useArticles;
