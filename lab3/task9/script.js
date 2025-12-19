const text = document.getElementById('text-to-color');
const select = document.getElementById('color-select');

select.addEventListener('change', function () {
    const chosenColor = select.value;
    text.style.color = chosenColor;
});