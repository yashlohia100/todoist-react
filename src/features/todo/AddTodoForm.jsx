import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa6';
import { useCreateTodo } from './useCreateTodo';

function AddTodoForm() {
  const [text, setText] = useState('');

  const { isCreating, createTodo } = useCreateTodo();

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;

    const newTodo = { text };
    createTodo(newTodo, {
      onSuccess: () => {
        setText('');
      },
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-20 flex justify-center gap-5">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-52 rounded-full bg-red-50 px-4 text-stone-800 transition focus:outline-none focus:ring focus:ring-red-300 sm:w-72"
      />

      <button
        disabled={isCreating}
        className="rounded-full bg-red-400 px-5 py-2 font-semibold transition duration-300 hover:bg-red-500 hover:text-red-100 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-stone-200 disabled:cursor-not-allowed"
      >
        {isCreating ? (
          <span className="text-2xl">
            <FaSpinner />
          </span>
        ) : (
          'Add'
        )}
      </button>
    </form>
  );
}

export default AddTodoForm;
