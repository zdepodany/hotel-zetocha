/**
 * Indikátor otevírací doby restaurace
 * Otevřeno: 11:00 – 22:00 (časová zóna Europe/Prague)
 */
(function () {
    const OPEN_HOUR = 11;
    const CLOSE_HOUR = 22;

    function init() {
        const statusEl = document.getElementById('opening-status');
        if (!statusEl) return;

        const now = new Date();
        const tz = 'Europe/Prague';
        const hour = parseInt(new Intl.DateTimeFormat('en-CA', { timeZone: tz, hour: '2-digit', hour12: false }).format(now), 10);
        const dayStr = new Intl.DateTimeFormat('en-CA', { timeZone: tz, weekday: 'short' }).format(now);
        const day = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[dayStr];

        const isOpen = hour >= OPEN_HOUR && hour < CLOSE_HOUR;

        statusEl.className = 'opening-hours-status ' + (isOpen ? 'open' : 'closed');
        statusEl.querySelector('.status-text').textContent = isOpen ? 'Právě otevřeno' : 'Zavřeno';

        const list = document.querySelector('.opening-hours-list');
        if (list) {
            const dts = list.querySelectorAll('dt');
            const dds = list.querySelectorAll('dd');
            const htmlIndex = (day + 6) % 7;
            dts.forEach((dt, i) => dt.classList.toggle('today', i === htmlIndex));
            dds.forEach((dd, i) => dd.classList.toggle('today', i === htmlIndex));
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
