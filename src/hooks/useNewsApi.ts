import { useQuery } from '@tanstack/react-query';
import { getFromNewsApi } from '@/services/newsapi.service';

const useNewsApi = ({
  query,
  category,
  to,
  from,
  source,
  page,
}: {
  query?: string;
  category?: string;
  to?: string;
  from?: string;
  source?: string;
  page?: number;
}) =>
  useQuery({
    queryKey: ['news-api', { query, category, to, from, source, page }],
    queryFn: () => getFromNewsApi({ query, category, to, from, source, page }),
  });

export default useNewsApi;
