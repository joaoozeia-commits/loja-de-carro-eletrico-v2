document.addEventListener('DOMContentLoaded', () => {
    // 1. Alternância de Tema (Claro / Escuro)
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

    // 2. Controle de Acessibilidade: Escala de Fonte
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
        if (currentScale < maxScale) updateFontScale(currentScale + scaleStep);
    });

    btnDecrease.addEventListener('click', () => {
        if (currentScale > minScale) updateFontScale(currentScale - scaleStep);
    });

    btnReset.addEventListener('click', () => updateFontScale(1));

    // 3. Modal da Área Administrativa
    const adminModal = document.getElementById('admin-modal');
    const btnOpenAdmin = document.getElementById('btn-open-admin');
    const btnCloseAdmin = document.getElementById('btn-close-admin');
    const adminLoginForm = document.getElementById('admin-login-form');

    function toggleModal(open) {
        adminModal.classList.toggle('active', open);
        adminModal.setAttribute('aria-hidden', !open);
        if (open) {
            document.getElementById('admin-user').focus();
        }
    }

    btnOpenAdmin.addEventListener('click', () => toggleModal(true));
    btnCloseAdmin.addEventListener('click', () => toggleModal(false));

    window.addEventListener('click', (e) => {
        if (e.target === adminModal) toggleModal(false);
    });

    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Tentativa de login enviada.');
        toggleModal(false);
        adminLoginForm.reset();
    });

    // 4. Validação e envio do Formulário de Contato
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            formFeedback.textContent = 'Por favor, preencha todos os campos do formulário.';
            formFeedback.className = 'form-feedback error';
            return;
        }

        formFeedback.textContent = 'Obrigado! Sua mensagem foi enviada com sucesso.';
        formFeedback.className = 'form-feedback success';
        contactForm.reset();
    });
});
