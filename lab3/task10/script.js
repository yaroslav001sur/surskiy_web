const list = document.getElementById('item-list');
const addBtn = document.getElementById('add-item-btn');

let counter = 3;

list.addEventListener('click', function(event) {
    if (event.target && event.target.matches('li.list__item')) {
        event.target.textContent = 'Нажато!';
        event.target.classList.add('clicked');
    }
});

addBtn.addEventListener('click', () => {
    counter++;

    const li = document.createElement('li');
    li.textContent = `Пункт ${counter}`;
    li.className = 'list__item';

    list.appendChild(li);
});