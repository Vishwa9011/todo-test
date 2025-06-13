document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const task = input.value.trim();
        if (task) {
            addTodo(task);
            input.value = '';
        }
    });

    function addTodo(text) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = text;
        span.addEventListener('click', function() {
            span.classList.toggle('completed');
        });
        li.appendChild(span);
        const delBtn = document.createElement('button');
        delBtn.textContent = '✗';
        delBtn.className = 'delete-btn';
        delBtn.addEventListener('click', function() {
            list.removeChild(li);
        });
        li.appendChild(delBtn);
        list.appendChild(li);
    }
});
