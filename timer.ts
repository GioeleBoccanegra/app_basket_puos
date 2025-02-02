let pulsanteCreaTimer: HTMLButtonElement = document.createElement("button")


function nascondiBottone(bottone: HTMLButtonElement): void {
  bottone.style.display = "none";
}

function creaPulsanteTimer(timerContainer: HTMLDivElement | null): void {
  if (timerContainer) {
    pulsanteCreaTimer.classList.add("pulsante-avvia-timer")
    timerContainer.appendChild(pulsanteCreaTimer)
    pulsanteCreaTimer.textContent = "Usa timer"
    impostaDurata(pulsanteCreaTimer, timerContainer)
  }
}


function impostaDurata(pulsanteCreaTimer: HTMLButtonElement, timerContainer: HTMLDivElement) {
  pulsanteCreaTimer.addEventListener("click", () => {
    let durataCambi: number | null = Number(prompt("inserisci timer cambio in minuti"))
    nascondiBottone(pulsanteCreaTimer)
    console.log(durataCambi)
    creaTimer(durataCambi, timerContainer)
  })
}


function creaTimer(durataCambi: number, timerContainer: HTMLDivElement) {
  let timer: HTMLParagraphElement = document.createElement("p");
  timerContainer.appendChild(timer);
  aggiornaTimer(durataCambi, timer);
}

function aggiornaTimer(durataCambi: number, timer: HTMLParagraphElement) {
  let tempoRestante = durataCambi * 60; // Converto in secondi
  let timerInterval = setInterval(() => {
    if (tempoRestante > 0) {
      timer.textContent = `Tempo restante: ${tempoRestante} secondi`;
      tempoRestante--; // Decrementa il tempo ogni secondo
    } else {
      timer.textContent = "Tempo scaduto!";
      clearInterval(timerInterval); // Ferma il timer
    }
  }, 1000);
}



export { creaPulsanteTimer }