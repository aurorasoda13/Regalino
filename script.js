const envelopeWrapper = document.querySelector('.envelope-wrapper');
const envelope = document.querySelector('.envelope');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

const jarWrapper = document.querySelector('.jar-wrapper');
const jar = document.getElementById('jar');
const randomMessageDisplay = document.getElementById('random-message');
const ticketContainer = document.querySelector('.ticket-container');

// Frasi casuali da estrarre
const phrases = [
    "Il nostro amore è una melodia perfetta.",
    "Sei la mia stella polare in ogni tempesta.",
    "Ogni giorno con te è un regalo.",
    "La felicità ha il tuo sorriso.",
    "Il mio cuore è tuo, per sempre.",
    "Non so dove andrò, ma sarò al tuo fianco.",
    "Sei la parte migliore di me.",
    "Ti amo, più di quanto le parole possano dire."
];

// Funzione per creare i bigliettini all'interno del barattolo
function createTickets() {
    for (let i = 0; i < 15; i++) {
        const ticket = document.createElement('div');
        ticket.classList.add('ticket');
        ticket.style.left = `${Math.random() * 80 + 10}%`;
        ticket.style.top = `${Math.random() * 80 + 10}%`;
        ticket.style.transform = `rotate(${Math.random() * 360}deg)`;
        ticket.style.animationDelay = `${Math.random() * 2}s`;
        ticketContainer.appendChild(ticket);
    }
}

document.addEventListener('DOMContentLoaded', createTickets);

// Gestione dell'apertura e chiusura della busta
openBtn.addEventListener('click', () => {
    envelope.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    // Nasconde la busta e mostra il barattolo
    envelopeWrapper.classList.add('hidden');
    jarWrapper.classList.add('active');
});

// Gestione dell'estrazione delle frasi dal barattolo
jar.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];

    // Animazione per far sparire la frase e mostrarne una nuova
    randomMessageDisplay.style.opacity = '0';
    setTimeout(() => {
        randomMessageDisplay.textContent = randomPhrase;
        randomMessageDisplay.style.opacity = '1';
    }, 500); // Ritardo per l'animazione di dissolvenza
});
 
