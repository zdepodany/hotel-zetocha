/**
 * Hotel Zetocha - Main JavaScript
 * Jazykový přepínač je připraven pro CZ, DE, EN
 * Zatím je implementována pouze česká verze
 */

document.addEventListener('DOMContentLoaded', () => {
    initLangSwitcher();
    initMobileMenu();
});

/**
 * Jazykový přepínač - připraven pro budoucí vícejazyčnou verzi
 */
function initLangSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            
            // Odstranit aktivní stav
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Pro budoucí implementaci: načíst překlady podle jazyka
            // Zatím pouze CZ je plně implementován
            if (lang === 'de' || lang === 'en') {
                console.log(`Jazyk ${lang} bude dostupný po doplnění překladů.`);
                // TODO: Načíst překlady a aktualizovat obsah stránky
            }
        });
    });
}

/**
 * Mobilní menu
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');
    
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('open');
            menuBtn.classList.toggle('active');
        });

        // Zavřít menu po kliknutí na odkaz
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                menuBtn.classList.remove('active');
            });
        });
    }
}
