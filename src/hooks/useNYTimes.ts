import { getFromNYTimes } from '@/services/nytimes.service';
import { useQuery } from '@tanstack/react-query';

const useNYTimes = ({
  query,
  category,
}: {
  query?: string;
  category?: string;
}) =>
  useQuery({
    queryKey: ['ty-times', { query, category }],
    queryFn: () => getFromNYTimes({ query, category }),
  });

export default useNYTimes;
