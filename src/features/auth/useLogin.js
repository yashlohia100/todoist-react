import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../services/authApi';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending: isLoggingIn, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      // console.log(data);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('Logged in successfully');

      setTimeout(() => {
        navigate('/todos');
      }, 1000);
    },
    onError: (error) => {
      // console.log(error);
      toast.error('Unable to log in!');
    },
  });

  return { isLoggingIn, login };
}
