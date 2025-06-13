document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    function addTodo() {
        const value = input.value.trim();
        if (!value) return;
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = value;
        li.appendChild(span);

        const actions = document.createElement('div');
        actions.className = 'todo-actions';
        const markBtn = document.createElement('button');
        markBtn.textContent = '✓';
        markBtn.className = 'mark';
        markBtn.onclick = () => {
            li.classList.toggle('completed');
        };
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑';
        deleteBtn.onclick = () => {
            todoList.removeChild(li);
        };
        actions.appendChild(markBtn);
        actions.appendChild(deleteBtn);
        li.appendChild(actions);
        todoList.appendChild(li);
        input.value = '';
    }

    addBtn.addEventListener('click', addTodo);
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') addTodo();
    });
});