document.addEventListener('DOMContentLoaded', () => {
    // Alternância de Tema (Claro / Escuro)
    const themeToggleBtn = document.getElementById('btn-toggle-theme');
    const htmlElement = document.documentElement;

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        themeToggleBtn.setAttribute('aria-pressed', newTheme === 'dark');
        themeToggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        themeToggleBtn.setAttribute('aria-label', `Alternar para modo ${newTheme === 'dark' ? 'claro' : 'escuro'}`);
    });

    // Controle de Acessibilidade: Escala de Fonte
    const btnIncrease = document.getElementById('btn-increase-font');
    const btnDecrease = document.getElementById('btn-decrease-font');
    const btnReset = document.getElementById('btn-reset-font');

    let currentScale = 1;
    const scaleStep = 0.1;
    const maxScale = 1.4;
    const minScale = 0.8;

    function updateFontScale(scale) {
        currentScale = scale;
        document.documentElement.style.setProperty('--font-scale', currentScale);
    }

    btnIncrease.addEventListener('click', () => {
        if (currentScale < maxScale) {
            updateFontScale(currentScale + scaleStep);
        }
    });

    btnDecrease.addEventListener('click', () => {
        if (currentScale > minScale) {
            updateFontScale(currentScale - scaleStep);
        }
    });

    btnReset.addEventListener('click', () => {
        updateFontScale(1);
    });
});
