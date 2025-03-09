import { useQuery } from '@tanstack/react-query';
import { getFromNewsApi } from '../services/newsapi.service';

const useGetArticlesFromNewsApi = () =>
  useQuery({
    queryKey: ['news-api'],
    queryFn: () => getFromNewsApi(),
  });

export default useGetArticlesFromNewsApi;
