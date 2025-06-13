document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('todo-input');
  const addBtn = document.getElementById('add-btn');
  const todoList = document.getElementById('todo-list');

  function createTodo(text) {
    const li = document.createElement('li');

    li.textContent = text;
    li.addEventListener('click', function(e) {
      if (e.target.className !== 'delete-btn') {
        li.classList.toggle('completed');
      }
    });

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.onclick = function(e) {
      e.stopPropagation();
      todoList.removeChild(li);
    };

    li.appendChild(delBtn);
    todoList.appendChild(li);
  }

  addBtn.onclick = function() {
    const value = input.value.trim();
    if (value) {
      createTodo(value);
      input.value = '';
      input.focus();
    }
  };

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      addBtn.onclick();
    }
  });
});