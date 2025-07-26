// filepath: ristorante-da-silvano/src/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Gestione click su "Scopri di più" per mostrare la storia completa
    const scopriPiuBtn = document.querySelector('a[href="#storia-completa"]');
    const storiaCompletaSection = document.getElementById('storia-completa');
    
    if (scopriPiuBtn) {
        scopriPiuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Mostra la sezione storia completa
            storiaCompletaSection.style.display = 'block';
            // Scrolla fino alla sezione
            storiaCompletaSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Gestione click su "Torna alla sezione Chi Siamo"
    document.addEventListener('click', function(e) {
        // Controlla se il click è su un link che punta a #chi-siamo E siamo nella sezione storia-completa
        if (e.target.closest('a[href="#chi-siamo"]') && storiaCompletaSection) {
            e.preventDefault();
            // Nascondi la sezione storia completa
            storiaCompletaSection.style.display = 'none';
            // Mostra la sezione chi-siamo
            const chiSiamoSection = document.getElementById('chi-siamo');
            if (chiSiamoSection) {
                // Aggiungi un piccolo ritardo per assicurarci che la transizione sia fluida
                setTimeout(() => {
                    chiSiamoSection.scrollIntoView({ behavior: 'smooth' });
                }, 50);
            }
        }
    });
    
    // Navbar centrale
    const navHome = document.getElementById('nav-home');
    const navRistorante = document.getElementById('nav-ristorante');
    const navMenu = document.getElementById('nav-menu');
    const navChiSiamo = document.getElementById('nav-chi-siamo');
    const navOrari = document.getElementById('nav-orari');
    const navInfoContatti = document.getElementById('nav-info-contatti');
    const navParcheggio = document.getElementById('nav-parcheggio');

    const homeSection = document.getElementById('home-section');
    const ristoranteSection = document.getElementById('ristorante-section');
    const menuSection = document.getElementById('menu-section');
    const chiSiamoSection = document.getElementById('chi-siamo-section');
    const orariSection = document.getElementById('orari-section');
    const infoContattiSection = document.getElementById('info-contatti-section');
    const parcheggioSection = document.getElementById('parcheggio-section');
    const homeOverlay = document.getElementById('home-overlay');

    const navLinks = [
        { link: navHome, section: homeSection },
        { link: navChiSiamo, section: chiSiamoSection },
        { link: navRistorante, section: ristoranteSection },
        { link: navMenu, section: menuSection },
        { link: navOrari, section: orariSection },
        { link: navInfoContatti, section: infoContattiSection },
        { link: navParcheggio, section: parcheggioSection }
    ];

    function showSection(section, link) {
        // Nascondi tutte le sezioni
        homeSection.style.display = 'none';
        ristoranteSection.style.display = 'none';
        menuSection.style.display = 'none';
        chiSiamoSection.style.display = 'none';
        orariSection.style.display = 'none';
        infoContattiSection.style.display = 'none';
        parcheggioSection.style.display = 'none';
        // Mostra la sezione selezionata
        section.style.display = 'block';
        // Overlay solo in home
        if (section === homeSection) {
            homeOverlay.style.display = 'block';
        } else {
            homeOverlay.style.display = 'none';
        }
        // Aggiorna la classe active
        navLinks.forEach(obj => obj.link.classList.remove('active'));
        if (link) link.classList.add('active');
    }

    navLinks.forEach(obj => {
        obj.link.addEventListener('click', function(e) {
            e.preventDefault();
            showSection(obj.section, obj.link);
        });
    });

    // Mostra la home all'avvio
    showSection(homeSection, navHome);
});