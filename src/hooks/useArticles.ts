import { useMemo, useState } from 'react';
import useNewsApi from '@/hooks/useNewsApi';
import useGNews from '@/hooks/useGNews';
import useNYTimes from '@/hooks/useNYTimes';
import { useQueryState } from 'nuqs';
import { useEffect } from 'react';
import { debounce } from 'lodash';

const useArticles = () => {
  const [queryValue] = useQueryState('query');
  const [categoryValue] = useQueryState('category');
  const [query, setQuery] = useState<string>();

  useEffect(() => {
    const debouncedSetQuery = debounce(setQuery, 500);
    debouncedSetQuery(queryValue?.trim() || undefined);

    return () => {
      debouncedSetQuery.cancel();
    };
  }, [queryValue]);

  const category = categoryValue || undefined;

  const { data } = useNewsApi({ query, category });
  const { data: gData } = useGNews({ query, category });
  const { data: nytData } = useNYTimes({ query, category });

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
