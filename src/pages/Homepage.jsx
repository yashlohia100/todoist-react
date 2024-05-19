import { Link } from 'react-router-dom';
import { useGetCurrentUser } from '../features/user/useGetCurrentUser';
import { FaArrowRight } from 'react-icons/fa6';

function Homepage() {
  const { isPending, user, error } = useGetCurrentUser();

  if (isPending) {
    return (
      <div className="mt-24 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="mt-24 text-center">
      <h2 className="text-2xl font-medium text-stone-700 dark:text-slate-300">
        Welcome to Todoist
      </h2>
      <p className="mt-4 text-stone-700 dark:text-slate-400">
        Start organising you life.
      </p>

      {user && (
        <div className="mt-12">
          <Link
            to="/todos"
            className="mx-auto flex h-10 w-40 items-center justify-center gap-2 rounded-full font-semibold ring ring-red-400 transition-all duration-300 hover:gap-4 hover:bg-red-400 hover:text-red-100"
          >
            <span>Go to todos</span>
            <FaArrowRight />
          </Link>
        </div>
      )}

      {error && (
        <div className="mt-12 space-x-8">
          <Link
            className="rounded-full px-4 py-2 font-semibold ring ring-red-400 transition hover:bg-red-400 hover:text-red-100"
            to="/signup"
          >
            Signup
          </Link>

          <Link
            className="rounded-full px-4 py-2 font-semibold ring ring-red-400 transition hover:bg-red-400 hover:text-red-100"
            to="/login"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default Homepage;
