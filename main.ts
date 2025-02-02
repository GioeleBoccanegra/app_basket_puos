//main.ts
import { Squadra, squadra1, squadra2, controllaClickDiv } from './click.js';
import { clickInizia, Bottone, ADiv } from './view.js';

import { creaPulsanteTimer } from './timer.js';

const inizia: Bottone = document.querySelector("[data-start-button]");
const containerIniziale: ADiv = document.querySelector("[data-future-container]");


function start() {
  clickInizia(inizia, containerIniziale, () => {

    const timerContainer = document.querySelector("[data-timer-container]") as HTMLDivElement;
    creaPulsanteTimer(timerContainer)
    const containerSquadra1 = document.querySelector(".container-squadra1") as HTMLDivElement
    const containerSquadra2 = document.querySelector(".container-squadra2") as HTMLDivElement

    controllaClickDiv(squadra1, squadra2, containerSquadra1, containerSquadra2);
  });
}

start();






