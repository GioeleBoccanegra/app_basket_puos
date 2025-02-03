//timer.ts
let pulsanteCreaTimer = document.createElement("button");
function nascondiBottone(bottone) {
    bottone.style.display = "none";
}
function creaPulsanteTimer(timerContainer) {
    if (timerContainer) {
        pulsanteCreaTimer.classList.add("pulsante-avvia-timer");
        timerContainer.appendChild(pulsanteCreaTimer);
        pulsanteCreaTimer.textContent = "Usa timer";
        impostaDurata(pulsanteCreaTimer, timerContainer);
    }
}
function impostaDurata(pulsanteCreaTimer, timerContainer) {
    pulsanteCreaTimer.addEventListener("click", () => {
        let durataCambi = Number(prompt("inserisci timer cambio in minuti"));
        durataCambi *= 60;
        nascondiBottone(pulsanteCreaTimer);
        console.log(durataCambi);
        creaTimer(durataCambi, timerContainer);
    });
}
function creaTimer(durataCambi, timerContainer) {
    let timer = document.createElement("p");
    timerContainer.appendChild(timer);
    aggiornaTimer(durataCambi, timer);
}
function aggiornaTimer(durataCambi, timer) {
    let tempoRestante = durataCambi; // Converto in secondi
    let suonofine = new Audio("dong.mp3");
    let timerInterval = setInterval(() => {
        if (tempoRestante > 0) {
            timer.textContent = `Tempo restante: ${tempoRestante} secondi`;
            tempoRestante--; // Decrementa il tempo ogni secondo
        }
        else {
            suonofine.play();
            timer.textContent = "fare i cambi";
            RiavviaTimer(timer, durataCambi);
            clearInterval(timerInterval); // Ferma il timer
        }
    }, 1000);
}
function RiavviaTimer(timer, durataCambi) {
    let pulsanteRiavviaTimer = document.createElement("button");
    pulsanteRiavviaTimer.classList.add("pulsante-riavvia-timer");
    pulsanteRiavviaTimer.style.display = "block";
    pulsanteRiavviaTimer.textContent = "riavvia timer";
    timer.appendChild(pulsanteRiavviaTimer);
    pulsanteRiavviaTimer.addEventListener("click", () => {
        // Rimuoviamo il vecchio timer e pulsante
        timer.textContent = "";
        pulsanteRiavviaTimer.style.display = "none";
        // Riavviamo il timer con la stessa durata
        let tempoRestante = durataCambi; // Esegui il timer di nuovo con la stessa durata (o chiedi l'input nuovamente)
        aggiornaTimer(tempoRestante, timer);
    });
}
export { creaPulsanteTimer };
