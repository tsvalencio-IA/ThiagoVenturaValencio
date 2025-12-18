/* ==================================================================
   CONTROLE DO PORTFÓLIO THIAGO VENTURA VALENCIO (KYB)
   ================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de Apresentação Iniciado - KYB Target");

    // Registrar Service Worker para Cache (Performance no Celular)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('Cache registrado:', reg.scope))
                .catch(err => console.log('Falha no cache:', err));
        });
    }

    // Efeitos visuais simples se necessário
    const buttons = document.querySelectorAll('a');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Feedback tátil visual ao clicar
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = '', 150);
        });
    });
});
