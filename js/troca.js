function traduzirPagina() {
    let flagImg = document.querySelector('.flag-img');
    
    // Teste simples: se a imagem atual termina com eua.png, muda para bra.jpeg
    if (flagImg.src.includes('eua.png')) {
        flagImg.src = 'img/bra.jpeg';
        console.log("Trocando para Brasil");
    } else {
        flagImg.src = 'img/eua.png';
        console.log("Trocando para EUA");
    }

    // Parte do Google (deixe aqui para traduzir o texto também)
    let select = document.querySelector('select.goog-te-combo');
    if (select) {
        select.value = (select.value === 'en') ? 'pt' : 'en';
        select.dispatchEvent(new Event('change'));
    }
}
