import { getFromNYTimes } from '@/services/nytimes.service';
import { useQuery } from '@tanstack/react-query';

const useNYTimes = ({
  query,
  category,
  to,
  from,
  enabled,
  page,
}: {
  query?: string;
  category?: string;
  to?: string;
  from?: string;
  enabled?: boolean;
  page?: number;
}) =>
  useQuery({
    queryKey: ['ty-times', { query, category, to, from, page }],
    queryFn: () => getFromNYTimes({ query, category, to, from, page }),
    enabled,
  });

export default useNYTimes;
