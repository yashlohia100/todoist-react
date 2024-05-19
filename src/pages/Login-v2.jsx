// Handling form by controlled inputs
import { useState } from 'react';
import { useLogin } from '../features/user/useLogin';

function Login() {
  const { isLoggingin, login } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Form</h1>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={isLoggingin}>
        {isLoggingin ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
}

export default Login;
