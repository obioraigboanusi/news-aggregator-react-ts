import { useQuery } from '@tanstack/react-query';
import { getFromGNewsApi } from '@/services/gnews.service';

const useGuardianNews = ({
  query,
  category,
}: {
  query?: string;
  category?: string;
}) =>
  useQuery({
    queryKey: ['guardian-news', { query, category }],
    queryFn: () => getFromGNewsApi({ query, category }),
  });

export default useGuardianNews;
