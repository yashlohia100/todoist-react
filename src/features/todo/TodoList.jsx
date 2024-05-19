import TodoItem from './TodoItem';
import { useGetTodos } from './useGetTodos';

function TodoList() {
  const { isPending, todos, error } = useGetTodos();

  if (isPending) {
    // return <div className="mt-8 text-center">Loading...</div>;
    return (
      <div className="mt-10 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    console.log(error);
    return <div className="mt-8 text-center">Error loading todos ❌</div>;
  }

  if (todos.length === 0) {
    return (
      <div className="mt-8 text-center text-lg font-medium">
        Start adding your todos...
      </div>
    );
  }

  return (
    <ul className="mt-8 space-y-5">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
