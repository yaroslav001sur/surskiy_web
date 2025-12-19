const form = document.getElementById('user-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageBox = document.getElementById('message-box');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    messageBox.textContent = '';
    messageBox.style.backgroundColor = 'transparent';

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        messageBox.textContent = 'Ошибка: заполните все поля!';
        messageBox.style.backgroundColor = '#ffb1b1';
        messageBox.style.color = 'darkred';
        return;
    }

    messageBox.textContent = 'Форма успешно отправлена (смотри консоль)!';
    messageBox.style.backgroundColor = '#b1ffb8';
    messageBox.style.color = 'green';

    const formData = new FormData(form);

    console.log('Отправленные данные:');
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
});