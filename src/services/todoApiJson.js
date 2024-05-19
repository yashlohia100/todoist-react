const API_URL = 'http://localhost:8080';

export async function getTodosApi() {
  const res = await fetch(`${API_URL}/todos`);
  const data = await res.json();
  return data;
}

export async function addTodoApi(newTodoObj) {
  const res = await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodoObj),
  });

  // Reject promise if response status code is not 2xx
  // Fetch does not throw error on 404
  if (!res.ok) {
    throw new Error('Error creating');
  }

  const data = await res.json();
  return data;
}

export async function deleteTodoApi(id) {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    // const res = await fetch(`http://localhost:8080/todos/008`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Error deleting');
  }

  const data = await res.json();
  return data;
}

export async function updateTodoApi(id, patchObj) {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchObj),
  });

  if (!res.ok) {
    throw new Error('Error updating');
  }

  const data = await res.json();
  return data;
}
