import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { logoutApi } from '../../services/authApi';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending: isLoggingOut, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // Invalidate would not work here
      queryClient.resetQueries({ queryKey: ['user'] });
      queryClient.resetQueries({ queryKey: ['todos'] });
      toast.success('Logged out successfully');

      setTimeout(() => {
        navigate('/');
      }, 300);
    },
    onError: () => {
      toast.error('Unable to logout!');
    },
  });

  return { isLoggingOut, logout };
}

/*
Why invalidate would not work?
`user` state is already stored in cache.
If we invalidate then it is fetching again but maybe bacause it
would get error on refetch (because there is not jwt)
then it is just taking data from cache.
*/
