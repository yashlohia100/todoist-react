import { useQuery } from '@tanstack/react-query';
import { getCurrentlyLoggedInUserApi } from '../../services/userApi';

export function useGetCurrentUser() {
  const {
    isPending,
    data: user,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentlyLoggedInUserApi,
    retry: false,
  });

  return { isPending, user, error };
}
