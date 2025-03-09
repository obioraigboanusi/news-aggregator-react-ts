import { useQuery } from '@tanstack/react-query';
import { getFromNewsApi } from '../services/newsapi.service';

const useNewsApi = () =>
  useQuery({
    queryKey: ['news-api'],
    queryFn: () => getFromNewsApi(),
  });

export default useNewsApi;
