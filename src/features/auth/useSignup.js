import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { signupApi } from '../../services/authApi';

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending: isSigningUp, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('Signed up successfully');
      setTimeout(() => {
        navigate('/todos');
      }, 1000);
    },
    onError: () => {
      toast.error('Unable to sign up!');
    },
  });

  return { isSigningUp, signup };
}
