document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('new-todo');
  const list = document.getElementById('todo-list');

  let todos = [];

  function render() {
    list.innerHTML = '';
    todos.forEach((todo, idx) => {
      const li = document.createElement('li');
      li.className = 'todo-item' + (todo.done ? ' done' : '');
      const span = document.createElement('span');
      span.innerText = todo.text;
      span.style.cursor = 'pointer';
      span.onclick = () => {
        todos[idx].done = !todos[idx].done;
        render();
      };
      li.appendChild(span);

      const btn = document.createElement('button');
      btn.innerText = 'Delete';
      btn.className = 'delete-btn';
      btn.onclick = () => {
        todos.splice(idx, 1);
        render();
      };
      li.appendChild(btn);

      list.appendChild(li);
    });
  }
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const txt = input.value.trim();
    if (txt) {
      todos.push({ text: txt, done: false });
      input.value = '';
      render();
    }
  });
  render();
});