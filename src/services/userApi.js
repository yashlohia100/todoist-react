import config from './config';

// const API_URL = 'http://localhost:8000/api/users';
const API_URL = `${config.HOST}/api/users`;

export async function getCurrentlyLoggedInUserApi() {
  const res = await fetch(`${API_URL}/me`, { credentials: 'include' });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data.user;
}
