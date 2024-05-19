import config from './config';

// const API_URL = 'http://localhost:8000/api/todos';
const API_URL = `${config.HOST}/api/todos`;

export async function getTodosApi() {
  const res = await fetch(API_URL, { credentials: 'include' });
  const data = await res.json();
  console.log(data);
  if (!res.ok) throw new Error(data.message);
  return data.todos;
}

// { text: 'xyz', user: '660a9a222f9a9a0689141a55' }
export async function createTodoApi(newTodo) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo),
    credentials: 'include',
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data.todo;
}

export async function deleteTodoApi(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data.todo;
}

export async function updateTodoApi(id, patchObj) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patchObj),
    credentials: 'include',
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data.todo;
}
