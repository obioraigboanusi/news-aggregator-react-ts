import { useQuery } from '@tanstack/react-query';
import { getFromNewsApi } from '../services/newsapi.service';

const useGeArticlesFromNewsApi = () =>
  useQuery({
    queryKey: ['todos'],
    queryFn: () => getFromNewsApi(),
  });

export default useGeArticlesFromNewsApi;
