document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');

  function createTodoItem(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);
    const actions = document.createElement('div');
    actions.className = "todo-actions";

    const doneBtn = document.createElement('button');
    doneBtn.textContent = '✔';
    doneBtn.classList.add('done');
    doneBtn.title = "Mark as done";
    doneBtn.onclick = () => {
      li.classList.toggle('completed');
    };
    actions.appendChild(doneBtn);

    const delBtn = document.createElement('button');
    delBtn.textContent = '✖';
    delBtn.title = "Delete";
    delBtn.onclick = () => {
      list.removeChild(li);
    };
    actions.appendChild(delBtn);
    li.appendChild(actions);
    return li;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
      const todo = createTodoItem(text);
      list.appendChild(todo);
      input.value = '';
    }
  });
});