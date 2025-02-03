//main.ts
import { squadra1, squadra2, controllaClickDiv } from './click.js';
import { clickInizia } from './view.js';
import { creaPulsanteTimer } from './timer.js';
const inizia = document.querySelector("[data-start-button]");
const containerIniziale = document.querySelector("[data-future-container]");
function bottoneCambiaNomeSquadre(squadra1, squadra2) {
    const containerBottoneCambiaNomeSquadre = document.querySelector("[data-cambia-nome-squadra]");
    if (containerBottoneCambiaNomeSquadre) {
        let bottoneCambiaNome = document.createElement("button");
        bottoneCambiaNome.textContent = "Cambia Nome Squadre";
        containerBottoneCambiaNomeSquadre.appendChild(bottoneCambiaNome);
        bottoneCambiaNome.addEventListener("click", () => {
            let nuovoNomeSquadra1 = prompt("Inserisci il nuovo nome della squadra 1");
            let nuovoNomeSquadra2 = prompt("Inserisci il nuovo nome della squadra 2");
            if (nuovoNomeSquadra1 && nuovoNomeSquadra2) {
                squadra1.nome = nuovoNomeSquadra1;
                squadra2.nome = nuovoNomeSquadra2;
                let nomeSquadra1 = document.querySelector(".nome-squadra-1");
                let nomeSquadra2 = document.querySelector(".nome-squadra-2");
                if (nomeSquadra1 && nomeSquadra2) {
                    nomeSquadra1.textContent = squadra1.nome;
                    nomeSquadra2.textContent = squadra2.nome;
                }
            }
        });
    }
}
function start() {
    clickInizia(inizia, containerIniziale, () => {
        bottoneCambiaNomeSquadre(squadra1, squadra2);
        const timerContainer = document.querySelector("[data-timer-container]");
        timerContainer.style.display = "block";
        creaPulsanteTimer(timerContainer);
        const containerSquadra1 = document.querySelector(".container-squadra1");
        const containerSquadra2 = document.querySelector(".container-squadra2");
        controllaClickDiv(squadra1, squadra2, containerSquadra1, containerSquadra2);
    });
}
start();
