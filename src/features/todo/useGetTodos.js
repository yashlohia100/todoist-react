import { useQuery } from '@tanstack/react-query';
import { getTodosApi } from '../../services/todoApi';

export function useGetTodos() {
  const {
    isPending,
    data: todos,
    error,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodosApi,
  });

  return { isPending, todos, error };
}
