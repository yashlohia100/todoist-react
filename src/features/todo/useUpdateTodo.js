import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateTodoApi } from '../../services/todoApi';

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateTodo } = useMutation({
    // mutationFn can only receive one parameter
    mutationFn: (obj) => updateTodoApi(obj.id, obj.patchObj),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      console.log(data);
      toast.success('Updated successfully');
    },
    onError: (error) => {
      console.log(error);
      toast.error('Unable to update!');
    },
  });

  return { isUpdating, updateTodo };
}
