// Making direct request (no useMutation)
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../services/userApiExpress';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    try {
      const data = await loginApi(email, password);
      console.log(data);
      toast.success('Logged in successfully');
      setTimeout(() => {
        navigate('/dashboard');
        // navigate(-1);
      }, 2000);
    } catch (error) {
      toast.error('Error logging in!');
      console.log(error);
    }
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

      <button>Login</button>
    </form>
  );
}

export default Login;
