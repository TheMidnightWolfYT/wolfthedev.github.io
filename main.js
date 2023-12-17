document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const darkModeToggle = document.querySelector('.dark-mode-toggle');

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});