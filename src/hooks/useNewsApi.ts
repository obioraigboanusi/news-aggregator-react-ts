import { useQuery } from '@tanstack/react-query';
import { getFromNewsApi } from '@/services/newsapi.service';

const useNewsApi = ({
  query,
  category,
  to,
  from,
  source,
}: {
  query?: string;
  category?: string;
  to?: string;
  from?: string;
  source?: string;
}) =>
  useQuery({
    queryKey: ['news-api', { query, category, to, from, source }],
    queryFn: () => getFromNewsApi({ query, category, to, from, source }),
  });

export default useNewsApi;
