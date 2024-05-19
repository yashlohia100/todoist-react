import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodoApi } from '../../services/todoApi';
import toast from 'react-hot-toast';

export function useCreateTodo() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createTodo } = useMutation({
    // mutationFn: (newTodoObj) => addTodoApi(newTodoObj),
    mutationFn: createTodoApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      // console.log(data);
      toast.success('Created successfully');
    },
    onError: (error) => {
      // console.log(error);
      toast.error('Unable to create!');
    },
  });

  return { isCreating, createTodo };
}
