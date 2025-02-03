function creaPulsanteTimer(timerContainer) {
  if (timerContainer) {
    let pulsanteCreaTimer = document.createElement("button");
    pulsanteCreaTimer.classList.add("pulsante-avvia-timer");
    timerContainer.appendChild(pulsanteCreaTimer);
    pulsanteCreaTimer.textContent = "Usa timer";
  }
}

export { creaPulsanteTimer };
