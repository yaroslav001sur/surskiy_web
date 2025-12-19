const box = document.getElementById('target-box');
const btn = document.getElementById('toggle-btn');

btn.addEventListener('click', function () {
    box.classList.toggle('hidden');
});