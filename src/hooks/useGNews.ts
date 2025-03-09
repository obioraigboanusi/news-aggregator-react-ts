import { useQuery } from '@tanstack/react-query';
import { getFromGNewsApi } from '@/services/gnews.service';

const useGuardianNews = ({
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
    queryKey: ['guardian-news', { query, category, to, from, source, page }],
    queryFn: () => getFromGNewsApi({ query, category, to, from, source, page }),
  });

export default useGuardianNews;
