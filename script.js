document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('shadow-lg');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('shadow-lg');
        });
    });

    const navToggleBtn = document.getElementById('navToggleBtn');
    const closeNavBtn = document.getElementById('closeNavBtn');
    const sideNav = document.getElementById('sideNav');

    navToggleBtn.addEventListener('click', () => {
        sideNav.style.width = '250px';
    });

    closeNavBtn.addEventListener('click', () => {
        sideNav.style.width = '0';
    });
});
