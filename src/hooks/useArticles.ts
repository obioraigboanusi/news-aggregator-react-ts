import { useMemo, useState } from 'react';
import useNewsApi from '@/hooks/useNewsApi';
import useGNews from '@/hooks/useGNews';
import useNYTimes from '@/hooks/useNYTimes';
import { parseAsString, useQueryState, useQueryStates } from 'nuqs';
import { useEffect } from 'react';
import { debounce } from 'lodash';
import { getDateRange } from '@/config/timelineMap';

const useArticles = () => {
  const [queryValue] = useQueryState('query');
  const [categoryValue] = useQueryState('category');
  const [timeline] = useQueryState('timeline');
  const [timeRange] = useQueryStates({
    to: parseAsString,
    from: parseAsString,
  });

  const [query, setQuery] = useState<string>();

  useEffect(() => {
    const debouncedSetQuery = debounce(setQuery, 500);
    debouncedSetQuery(queryValue?.trim() || undefined);

    return () => {
      debouncedSetQuery.cancel();
    };
  }, [queryValue]);

  const { to: endDate, from: startDate } = timeline
    ? getDateRange(timeline)
    : timeRange;

  const category = categoryValue || undefined;
  const to = endDate || undefined;
  const from = startDate || undefined;
  console.log({ to, from });

  const { data } = useNewsApi({
    query,
    category,
    to,
    from,
  });

  const { data: gData } = useGNews({
    query,
    category,
    to,
    from,
  });

  const { data: nytData } = useNYTimes({
    query,
    category,
    to,
    from,
  });

  const articles = useMemo(
    () => [
      ...(data?.articles || []),
      ...(gData?.articles || []),
      ...(nytData?.articles || []),
    ],
    [data?.articles, gData?.articles, nytData?.articles]
  );

  return { articles, isLoading: false };
};

export default useArticles;
