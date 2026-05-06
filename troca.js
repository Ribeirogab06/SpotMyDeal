function traduzirPagina() {
    let select = document.querySelector('select.goog-te-combo');
    let flagImg = document.querySelector('.flag-img');

    if (select) {
        // Se estiver em PT (vazio ou 'pt'), muda para EN
        if (select.value === 'pt' || select.value === '') {
            select.value = 'en';
            if (flagImg) flagImg.src = 'img/eua.png'; 
        } 
        // Se estiver em EN, volta para PT
        else {
            select.value = 'pt';
            if (flagImg) flagImg.src = 'img/bra.jpeg';
        }

        // Dispara a tradução do Google
        select.dispatchEvent(new Event('change'));
    }
}