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
    let tempoRestante = durataCambi * 60; // Converto in secondi
    let timerInterval = setInterval(() => {
        if (tempoRestante > 0) {
            timer.textContent = `Tempo restante: ${tempoRestante} secondi`;
            tempoRestante--; // Decrementa il tempo ogni secondo
        }
        else {
            timer.textContent = "Tempo scaduto!";
            clearInterval(timerInterval); // Ferma il timer
        }
    }, 1000);
}
export { creaPulsanteTimer };
