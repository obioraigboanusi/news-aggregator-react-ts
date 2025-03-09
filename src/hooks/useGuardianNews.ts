import { useQuery } from '@tanstack/react-query';
import { getFromGuardianNewsApi } from '../services/gnews.service';

const useGuardianNews = () =>
  useQuery({
    queryKey: ['guardian-news'],
    queryFn: () => getFromGuardianNewsApi(),
  });

export default useGuardianNews;
