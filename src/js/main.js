const btn = document.querySelector('#close-btn');

btn.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal--hidden');
});