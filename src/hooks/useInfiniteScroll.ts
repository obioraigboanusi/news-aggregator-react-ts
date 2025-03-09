import { useEffect, useRef, useState } from 'react';

const useInfiniteScroll = (
  loadMore: () => void,
  hasMore: boolean,
  options = { root: null, rootMargin: '0px', threshold: 1.0 }
) => {
  const listRef = useRef<any>(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isFetching && hasMore) {
        setIsFetching(true);
        loadMore();
      }
    }, options);

    const target = listRef.current && listRef.current.lastElementChild;

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [isFetching, loadMore, options, hasMore]);

  const stopFetching = () => {
    setIsFetching(false);
  };

  return { isFetching, stopFetching, listRef };
};

export default useInfiniteScroll;
