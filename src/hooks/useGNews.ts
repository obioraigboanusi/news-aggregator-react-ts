import { useQuery } from '@tanstack/react-query';
import { getFromGNewsApi } from '@/services/gnews.service';

const useGuardianNews = ({
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
    queryKey: ['guardian-news', { query, category, to, from }],
    queryFn: () => getFromGNewsApi({ query, category, to, from }),
  });

export default useGuardianNews;
