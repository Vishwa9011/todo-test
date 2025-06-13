document.addEventListener('DOMContentLoaded', function() {
  const newTask = document.getElementById('new-task');
  const addTaskBtn = document.getElementById('add-task');
  const todoList = document.getElementById('todo-list');

  // Add new task
  addTaskBtn.addEventListener('click', function() {
    if (newTask.value.trim() !== '') {
      addTodo(newTask.value.trim());
      newTask.value = '';
    }
  });

  newTask.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTaskBtn.click();
    }
  });

  function addTodo(task) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task;
    span.style.cursor = 'pointer';
    li.appendChild(span);

    // Toggle completed
    span.addEventListener('click', function() {
      li.classList.toggle('completed');
    });

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete';
    delBtn.addEventListener('click', function() {
      todoList.removeChild(li);
    });
    li.appendChild(delBtn);

    todoList.appendChild(li);
  }
});