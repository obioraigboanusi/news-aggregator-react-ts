import { getFromNYTimes } from '@/services/nytimes.service';
import { useQuery } from '@tanstack/react-query';

const useNYTimes = ({
  query,
  category,
  to,
  from,
  enabled,
}: {
  query?: string;
  category?: string;
  to?: string;
  from?: string;
  enabled?: boolean;
}) =>
  useQuery({
    queryKey: ['ty-times', { query, category, to, from }],
    queryFn: () => getFromNYTimes({ query, category, to, from }),
    enabled,
  });

export default useNYTimes;
