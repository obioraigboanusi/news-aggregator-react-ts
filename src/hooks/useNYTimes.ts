import { getFromNYTimes } from '@/services/nytimes.service';
import { useQuery } from '@tanstack/react-query';

const useNYTimes = () =>
  useQuery({
    queryKey: ['ty-times'],
    queryFn: () => getFromNYTimes(),
  });

export default useNYTimes;
