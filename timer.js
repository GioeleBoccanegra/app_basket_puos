//timer.ts
let pulsanteCreaTimer = document.createElement("button");
function nascondiBottone(bottone) {
    bottone.style.display = "none";
}
function creaPulsanteTimer(timerContainer) {
    if (timerContainer) {
        pulsanteCreaTimer.classList.add("pulsante-avvia-timer");
        timerContainer.appendChild(pulsanteCreaTimer);
        pulsanteCreaTimer.textContent = "Usa timer cambi";
        let settingsTimerContaier = document.createElement("div");
        settingsTimerContaier.classList.add("settings-timer-container");
        let labelInputMinuti = document.createElement("label");
        labelInputMinuti.textContent = "Minuti";
        labelInputMinuti.setAttribute("for", "inputMinuti"); // Collega il label all'input
        let inputMinuti = document.createElement("input");
        inputMinuti.setAttribute("id", "inputMinuti"); // ID usato nel label
        inputMinuti.setAttribute("type", "number"); // Rende l'input numerico
        // Aggiungiamo gli elementi al container
        timerContainer.appendChild(settingsTimerContaier);
        settingsTimerContaier.appendChild(labelInputMinuti);
        settingsTimerContaier.appendChild(inputMinuti);
        impostaDurata(pulsanteCreaTimer, timerContainer, settingsTimerContaier, inputMinuti);
    }
}
function nascondiImpTimer(settingsTimerContaier) {
    settingsTimerContaier.remove();
}
function impostaDurata(pulsanteCreaTimer, timerContainer, settingsTimerContaier, inputMinuti) {
    pulsanteCreaTimer.addEventListener("click", () => {
        let durataCambi = Number(inputMinuti.value);
        if (!isNaN(durataCambi) && durataCambi > 0) {
            nascondiBottone(pulsanteCreaTimer);
            nascondiImpTimer(settingsTimerContaier);
            durataCambi *= 60;
            console.log(durataCambi);
            creaTimer(durataCambi, timerContainer);
        }
        else {
            alert("inserisci un numero maggiore di 0");
        }
    });
}
function creaTimer(durataCambi, timerContainer) {
    let timer = document.createElement("p");
    timerContainer.appendChild(timer);
    aggiornaTimer(durataCambi, timer);
}
function aggiornaTimer(durataCambi, timer) {
    let tempoRestante = durataCambi; // Converto in secondi
    let suonoFine = new Audio("urlo.mp3");
    let timerInterval = setInterval(() => {
        if (tempoRestante > 0) {
            timer.textContent = `Tempo restante: ${tempoRestante} secondi`;
            tempoRestante--; // Decrementa il tempo ogni secondo
        }
        else {
            suonoFine.play().catch(error => console.error("Errore durante la riproduzione dell'audio:", error));
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
    let wrapper = document.createElement("div");
    wrapper.appendChild(pulsanteRiavviaTimer);
    timer.after(wrapper);
    pulsanteRiavviaTimer.addEventListener("click", () => {
        wrapper.remove();
        aggiornaTimer(durataCambi, timer);
    });
}
export { creaPulsanteTimer };
