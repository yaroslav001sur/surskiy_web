let count = 0;

const counterDisplay = document.getElementById('counter-display');
const increaseBtn = document.getElementById('increase-btn');

increaseBtn.addEventListener('click', function () {
    count++;
    counterDisplay.textContent = `Счетчик: ${count}`;
});