import { getFromNYTimes } from '@/services/nytimes.service';
import { useQuery } from '@tanstack/react-query';

const useNYTimes = ({
  query,
  category,
  to,
  from,
}: {
  query?: string;
  category?: string;
  to?: string;
  from?: string;
}) =>
  useQuery({
    queryKey: ['ty-times', { query, category, to, from }],
    queryFn: () => getFromNYTimes({ query, category, to, from }),
  });

export default useNYTimes;
