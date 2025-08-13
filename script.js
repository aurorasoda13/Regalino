document.addEventListener('DOMContentLoaded', () => {
    const busta = document.querySelector('.busta');
    const chiudiBustaButton = document.getElementById('chiudi-busta');
    const barattolo = document.getElementById('barattolo');
    const bigliettino = document.getElementById('bigliettino');

    const frasi = [
        "<p>Ti amo da morire perchè mi fai sentire a casa.</p>",
        "<span>Voglio passare la mia vita con te.</span>",
        "<p>Tu e Orazio avete preso il mio cuore e ve lo siete diviso a metà.</p>",
        "<span>Farei di tutto per te, anche dare la mia vita.</span>",
        "<p>Sei bellissimo non dimenticarlo mai.</p>",
        "<span>Senza di te, il mio mondo non sarebbe lo stesso ormai.</span>",
        "<span>Ti amo anche quando scleri e non capisco niente di ciò che dici</span>",
        "<p>E' bellissimo vederti felice.</p>",
        "<span>Sta sera si fanno le sei??</span>",
    ];

    busta.addEventListener('click', () => {
        busta.classList.add('aperta');
        setTimeout(() => {
            chiudiBustaButton.classList.remove('nascosto');
        }, 1000);
    });

    chiudiBustaButton.addEventListener('click', () => {
        busta.classList.add('nascosto');
        chiudiBustaButton.classList.add('nascosto');
        barattolo.classList.remove('nascosto');
        mostraFraseCasuale();
        setInterval(mostraFraseCasuale, 5000);
    });

    function mostraFraseCasuale() {
        const indiceCasuale = Math.floor(Math.random() * frasi.length);
        bigliettino.innerHTML = frasi[indiceCasuale];
    }

});
