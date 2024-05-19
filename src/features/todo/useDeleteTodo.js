import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodoApi } from '../../services/todoApi';
import toast from 'react-hot-toast';

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteTodo } = useMutation({
    mutationFn: deleteTodoApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      console.log(data);
      toast.success('Deleted successfully');
    },
    onError: (error) => {
      console.log(error);
      toast.error('Unable to delete!');
    },
  });

  return { isDeleting, deleteTodo };
}
