
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
});

document.getElementById('theme-icon').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
});

function toggleDetails(card) {
    card.classList.toggle('active');
}

document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = title.includes(query) ? '' : 'none';
    });
});
