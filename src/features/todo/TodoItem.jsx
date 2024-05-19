import { FaCircleXmark } from 'react-icons/fa6';
import { FaSpinner } from 'react-icons/fa6';
import { useDeleteTodo } from './useDeleteTodo';
import { useUpdateTodo } from './useUpdateTodo';

function TodoItem({ todo }) {
  const { id, text, isDone } = todo;

  const { isDeleting, deleteTodo } = useDeleteTodo();

  const { isUpdating, updateTodo } = useUpdateTodo();

  return (
    <li className="grid grid-cols-[1fr_2fr_1fr] items-center justify-items-center gap-3">
      <input
        type="checkbox"
        checked={isDone}
        disabled={isUpdating}
        onChange={() => updateTodo({ id, patchObj: { isDone: !isDone } })}
        className="size-5 accent-emerald-400 hover:cursor-pointer disabled:cursor-not-allowed"
      />

      <p
        className={`text-lg ${isDone ? 'text-stone-700 line-through dark:text-slate-400' : ''}`}
      >
        {text}
      </p>

      <button
        onClick={() => deleteTodo(id)}
        disabled={isDeleting}
        className="text-xl text-red-400 transition hover:text-red-500 disabled:cursor-not-allowed"
      >
        {isDeleting ? <FaSpinner /> : <FaCircleXmark />}
      </button>
    </li>
  );
}

export default TodoItem;
