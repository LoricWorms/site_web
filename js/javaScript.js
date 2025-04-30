document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const nav = document.querySelector('nav');

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('hidden'); 
    });
});