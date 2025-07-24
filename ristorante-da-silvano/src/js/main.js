// filepath: ristorante-da-silvano/src/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const contactButton = document.getElementById('contact-button');
    const menuSection = document.getElementById('menu-section');
    const contactSection = document.getElementById('contact-section');

    menuButton.addEventListener('click', function() {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    });

    contactButton.addEventListener('click', function() {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Mostra l'URL corrente del sito in console
    console.log('URL del sito:', window.location.href);

    // Se vuoi mostrare l'URL in una sezione della pagina, decommenta e personalizza:
    // const urlElement = document.getElementById('site-url');
    // if (urlElement) {
    //     urlElement.textContent = window.location.href;
    // }
});