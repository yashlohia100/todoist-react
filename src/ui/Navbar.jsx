import { FaCheckDouble } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import DarkButton from './DarkButton';
import { useGetCurrentUser } from '../features/user/useGetCurrentUser';
import { useLogout } from '../features/auth/useLogout';

function Navbar({ isDark, setIsDark }) {
  const { isPending, user, error } = useGetCurrentUser();

  const { isLoggingOut, logout } = useLogout();

  return (
    <nav className="flex justify-between bg-red-400 px-7 text-stone-800">
      <div className="flex items-center gap-4">
        <span className="text-2xl">
          <FaCheckDouble />
        </span>

        {/* <h1 className="text-xl font-medium">Todoist</h1> */}
        <Link to="/" className="text-xl font-medium">
          Todoist
        </Link>
      </div>

      {user ? (
        <div className="flex items-center gap-4">
          <DarkButton isDark={isDark} setIsDark={setIsDark} />
          <button onClick={logout} className="font-medium uppercase">
            {isLoggingOut ? 'Logging out...' : 'Logout'}
          </button>
          <span className="font-medium uppercase">{user.name}</span>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <DarkButton isDark={isDark} setIsDark={setIsDark} />
          <Link to="/signup" className="font-medium uppercase">
            Signup
          </Link>
          <Link to="/login" className="font-medium uppercase">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
