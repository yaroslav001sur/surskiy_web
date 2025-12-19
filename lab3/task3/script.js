const list = document.getElementById('items-list');
const input = document.getElementById('item-input');
const addBtn = document.getElementById('add-item-btn');

addBtn.addEventListener('click', function() {
    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement('li');
    li.textContent = text;

    list.appendChild(li);

    input.value = "";
});