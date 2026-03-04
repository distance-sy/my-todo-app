document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text) {
        const li = document.createElement('li');
        li.textContent = text;

        const delBtn = document.createElement('button');
        delBtn.textContent = '删除';
        delBtn.style.marginLeft = '10px';
        delBtn.onclick = function() {
            if (confirm('确定要删除吗？')) {
                li.remove();
            }
        };
        li.appendChild(delBtn);

        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
});
