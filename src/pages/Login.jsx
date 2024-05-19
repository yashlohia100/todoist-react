import { useForm } from 'react-hook-form';
import { useLogin } from '../features/auth/useLogin';

const INPUT_STYLES =
  'rounded-full bg-red-50 px-4 py-2 text-stone-800 transition focus:outline-none focus:ring focus:ring-red-300';

function Login() {
  const { isLoggingIn, login } = useLogin();

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    // console.log(data);
    // const x = { email: 'yash@gmail.com', password: 'pass1234' };
    // data is in required format
    login(data);
  }

  function onError(errors) {
    console.log('Error', errors);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="mt-8 flex flex-col gap-5 px-2"
    >
      <h2 className="mb-6 text-center text-xl text-stone-600 dark:text-slate-300">
        Login to your account
      </h2>

      <input
        type="email"
        placeholder="Email"
        className={INPUT_STYLES}
        {...register('email', { required: 'Email is required.' })}
      />

      <input
        type="password"
        placeholder="Password"
        className={INPUT_STYLES}
        {...register('password', { required: 'Password is required.' })}
      />

      <button
        disabled={isLoggingIn}
        className="mt-4 rounded-full px-4 py-2 font-semibold ring ring-red-400 transition hover:bg-red-400 hover:text-red-100 disabled:cursor-not-allowed"
      >
        {isLoggingIn ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}

export default Login;
