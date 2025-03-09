import { getSources } from '@/services/newsapi.service';
import { useQuery } from '@tanstack/react-query';

const useSources = (params?: { category?: string }) => {
  const { category } = params || {};
  return useQuery({
    queryKey: ['sources', { category }],
    queryFn: () => getSources({ category }),
  });
};

export default useSources;
