import { useQuery } from '@tanstack/react-query';
import { getFromGNewsApi } from '../services/gnews.service';

const useGuardianNews = () =>
  useQuery({
    queryKey: ['guardian-news'],
    queryFn: () => getFromGNewsApi(),
  });

export default useGuardianNews;
