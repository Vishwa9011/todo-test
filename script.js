document.addEventListener('DOMContentLoaded', () => {
  const todoList = document.getElementById('todo-list');
  const newTodo = document.getElementById('new-todo');
  const addBtn = document.getElementById('add-btn');
  let todos = [];

  function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, idx) => {
      const li = document.createElement('li');
      li.className = 'todo-item' + (todo.completed ? ' completed' : '');

      const span = document.createElement('span');
      span.textContent = todo.text;
      li.appendChild(span);

      const actions = document.createElement('div');
      actions.className = 'todo-actions';

      const completeBtn = document.createElement('button');
      completeBtn.textContent = todo.completed ? 'Undo' : 'Done';
      completeBtn.className = 'complete-btn';
      completeBtn.onclick = () => {
        todos[idx].completed = !todos[idx].completed;
        renderTodos();
      };
      actions.appendChild(completeBtn);

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = () => {
        todos.splice(idx, 1);
        renderTodos();
      };
      actions.appendChild(deleteBtn);

      li.appendChild(actions);
      todoList.appendChild(li);
    });
  }

  addBtn.onclick = () => {
    const text = newTodo.value.trim();
    if (text) {
      todos.unshift({ text, completed: false });
      newTodo.value = '';
      renderTodos();
    }
  };

  newTodo.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      addBtn.click();
    }
  });

  renderTodos();
});
