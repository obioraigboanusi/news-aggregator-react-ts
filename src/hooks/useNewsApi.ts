import { useQuery } from '@tanstack/react-query';
import { getFromNewsApi } from '@/services/newsapi.service';

const useNewsApi = ({
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
    queryKey: ['news-api', { query, category, to, from }],
    queryFn: () => getFromNewsApi({ query, category, to, from }),
  });

export default useNewsApi;
