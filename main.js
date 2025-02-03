//main.ts
import { squadra1, squadra2, controllaClickDiv } from './click.js';
import { clickInizia } from './view.js';
import { creaPulsanteTimer } from './timer.js';
const inizia = document.querySelector("[data-start-button]");
const containerIniziale = document.querySelector("[data-future-container]");
function bottoneCambiaNomeSquadre(squadra1, squadra2) {
    const containerBottoneCambiaNomeSquadre = document.querySelector("[data-cambia-nome-squadra]");
    if (containerBottoneCambiaNomeSquadre) {
        containerBottoneCambiaNomeSquadre.style.display = "block";
        let bottoneCambiaNome = document.createElement("button");
        bottoneCambiaNome.textContent = "Cambia Nome Squadre";
        containerBottoneCambiaNomeSquadre.appendChild(bottoneCambiaNome);
        let inputNomeSquadreContainer = document.createElement("div");
        let labelNomeSquadra1 = document.createElement("label");
        labelNomeSquadra1.textContent = "Nome squadra1";
        labelNomeSquadra1.setAttribute("for", "input-squadra1"); // Collega il label all'input
        let inputSquadra1 = document.createElement("input");
        labelNomeSquadra1.classList.add("label-s");
        inputSquadra1.setAttribute("id", "input-squadra1"); // ID usato nel label
        inputSquadra1.classList.add("input-s");
        let labelNomeSquadra2 = document.createElement("label");
        labelNomeSquadra2.textContent = "Nome squadra2";
        labelNomeSquadra2.setAttribute("for", "input-squadra2"); // Collega il label all'input
        labelNomeSquadra2.classList.add("label-s");
        let inputSquadra2 = document.createElement("input");
        inputSquadra2.setAttribute("id", "input-squadra2"); // ID usato nel label
        inputSquadra2.classList.add("input-s");
        containerBottoneCambiaNomeSquadre.appendChild(inputNomeSquadreContainer);
        inputNomeSquadreContainer.appendChild(labelNomeSquadra1);
        inputNomeSquadreContainer.appendChild(inputSquadra1);
        inputNomeSquadreContainer.appendChild(labelNomeSquadra2);
        inputNomeSquadreContainer.appendChild(inputSquadra2);
        inputSquadra1.value = squadra1.nome;
        inputSquadra2.value = squadra2.nome;
        bottoneCambiaNome.addEventListener("click", () => {
            if (inputSquadra1.value && inputSquadra2.value) {
                squadra1.nome = inputSquadra1.value;
                squadra2.nome = inputSquadra2.value;
                let nomeSquadra1 = document.querySelector(".nome-squadra-1");
                let nomeSquadra2 = document.querySelector(".nome-squadra-2");
                if (nomeSquadra1 && nomeSquadra2) {
                    nomeSquadra1.textContent = squadra1.nome;
                    nomeSquadra2.textContent = squadra2.nome;
                }
            }
            else
                (alert("Devi inserire almeno una lettera in entrambi i nomi squadra"));
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
