import { useQuery } from '@tanstack/react-query';
import { getFromNewsApi } from '@/services/newsapi.service';

const useNewsApi = ({
  query,
  category,
}: {
  query?: string;
  category?: string;
}) =>
  useQuery({
    queryKey: ['news-api', { query, category }],
    queryFn: () => getFromNewsApi({ query, category }),
  });

export default useNewsApi;
