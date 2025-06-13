function addTodo() {
  const input = document.getElementById('newTodo');
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.classList.add('todo-text');
  span.textContent = text;
  span.onclick = function () {
    li.classList.toggle('completed');
  };
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(span);
  li.appendChild(delBtn);
  document.getElementById('todoList').appendChild(li);
  input.value = '';
}
document.getElementById('newTodo').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') addTodo();
});