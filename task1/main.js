document.addEventListener('DOMContentLoaded', function () {
    const roomCards = document.querySelectorAll('.room-card--available');
    roomCards.forEach(function (card) {
        const bookButton = card.querySelector('.room-card__button');
        bookButton.addEventListener('click', function (event) {
            event.stopPropagation();
            card.classList.add('room-card--pending');
        });
        card.addEventListener('mouseleave', function () {
            if (card.classList.contains('room-card--pending')) {
                card.classList.remove('room-card--pending');
                card.classList.add('room-card--selected');
            }
        });
        card.addEventListener('click', function () {
            if (card.classList.contains('room-card--selected')) {
                card.classList.remove('room-card--selected');
            }
        });
    });
});