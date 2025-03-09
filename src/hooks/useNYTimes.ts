import { getFromNYTimes } from '@/services/nytimes.service';
import { useQuery } from '@tanstack/react-query';

const useGuardianNews = () =>
  useQuery({
    queryKey: ['ty-times'],
    queryFn: () => getFromNYTimes(),
  });

export default useGuardianNews;
