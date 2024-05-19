import config from './config';

// const API_URL = 'http://localhost:8000/api/auth';
const API_URL = `${config.HOST}/api/auth`;

// const x = { email: 'abc@test.com', password: 'pass1234' };
export async function loginApi(credientialsObject) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credientialsObject),
    credentials: 'include',
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data.user;
}

// const x = {
//   name: 'abc',
//   email: 'abc@test.com',
//   password: 'pass1234',
//   passwordConfirm: 'pass1234',
// };
export async function signupApi(credientialsObject) {
  const res = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credientialsObject),
    credentials: 'include',
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data.user;
}

export async function logoutApi() {
  const res = await fetch(`${API_URL}/logout`, { credentials: 'include' });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
}
