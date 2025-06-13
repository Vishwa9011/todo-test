document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    function addTodo(text) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = text;
        li.appendChild(span);
        
        // Complete/uncomplete functionality
        li.addEventListener('click', function (e) {
            if (e.target !== li.querySelector('.delete-btn')) {
                li.classList.toggle('completed');
            }
        });

        // Delete button
        const btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.className = 'delete-btn';
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            li.remove();
        });
        li.appendChild(btn);
        todoList.appendChild(li);
    }

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const value = todoInput.value.trim();
        if (value) {
            addTodo(value);
            todoInput.value = '';
        }
    });
});