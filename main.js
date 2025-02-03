//main.ts
import { squadra1, squadra2, controllaClickDiv } from './click.js';
import { clickInizia } from './view.js';
import { creaPulsanteTimer } from './timer.js';
const inizia = document.querySelector("[data-start-button]");
const containerIniziale = document.querySelector("[data-future-container]");
function start() {
    clickInizia(inizia, containerIniziale, () => {
        const timerContainer = document.querySelector("[data-timer-container]");
        timerContainer.style.display = "block";
        creaPulsanteTimer(timerContainer);
        const containerSquadra1 = document.querySelector(".container-squadra1");
        const containerSquadra2 = document.querySelector(".container-squadra2");
        controllaClickDiv(squadra1, squadra2, containerSquadra1, containerSquadra2);
    });
}
start();
