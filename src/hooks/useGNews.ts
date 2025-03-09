import { useQuery } from '@tanstack/react-query';
import { getFromGNewsApi } from '@/services/gnews.service';

const useGuardianNews = ({
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
    queryKey: ['guardian-news', { query, category, to, from, source }],
    queryFn: () => getFromGNewsApi({ query, category, to, from, source }),
  });

export default useGuardianNews;
