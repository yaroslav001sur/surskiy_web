const list = document.getElementById('task-list');
const removeBtn = document.getElementById('remove-last-btn');

removeBtn.addEventListener('click', function () {
    const lastItem = list.lastElementChild;
    if (lastItem) {
        list.removeChild(lastItem);
    }
});