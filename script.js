document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('todo-input');
  const addBtn = document.getElementById('add-btn');
  const list = document.getElementById('todo-list');

  function addTodo(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;
    li.appendChild(span);

    const actions = document.createElement('div');
    actions.className = 'todo-actions';

    const doneBtn = document.createElement('button');
    doneBtn.textContent = '✔';
    doneBtn.className = 'done-btn';
    doneBtn.title = 'Mark as done';
    doneBtn.onclick = () => {
      li.classList.toggle('completed');
    };
    actions.appendChild(doneBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑';
    deleteBtn.className = 'delete-btn';
    deleteBtn.title = 'Delete';
    deleteBtn.onclick = () => {
      li.remove();
    };
    actions.appendChild(deleteBtn);

    li.appendChild(actions);
    list.appendChild(li);
  }

  addBtn.onclick = () => {
    const text = input.value.trim();
    if (text) {
      addTodo(text);
      input.value = '';
      input.focus();
    }
  };

  input.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      addBtn.click();
    }
  });
});