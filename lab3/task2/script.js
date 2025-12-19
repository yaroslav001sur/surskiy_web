const box = document.getElementById('interactive-box');
const toggleBtn = document.getElementById('style-toggle-btn');

toggleBtn.addEventListener('click', function() {
    box.classList.toggle('box--highlight');
});