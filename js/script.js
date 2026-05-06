function traduzirPagina() {
    var select = document.querySelector('select.goog-te-combo');
    if (select) {
        // Se estiver em PT, muda para EN. Se estiver em EN, muda para PT.
        let novaLang = (select.value === 'en') ? 'pt' : 'en';
        select.value = novaLang;
        
        // Dispara a tradução
        select.dispatchEvent(new Event('change'));
        
        // Opcional: Atualizar visual do seu botão azul (bandeira/texto)
        const langCode = document.querySelector('.lang-code');
        const flag = document.querySelector('.flag');
        if(novaLang === 'en') {
            langCode.innerText = 'PT';
            flag.innerText = '🇧🇷';
        } else {
            langCode.innerText = 'EN';
            flag.innerText = '🇺🇸';
        }
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'pt', 
        autoDisplay: false
    }, 'google_translate_element');
}