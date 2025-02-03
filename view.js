//view.ts
const containerIniziale = document.querySelector("[data-future-container]");
const inizia = document.querySelector("[data-start-button]");
function nascondiBottone(bottone) {
    bottone.style.display = "none";
}
function punteggioIniziale(containerSquadra1, containerSquadra2) {
    let punteggioSquadra1 = document.createElement("p");
    let punteggioSquadra2 = document.createElement("p");
    punteggioSquadra1.classList.add("punteggio");
    punteggioSquadra2.classList.add("punteggio");
    punteggioSquadra1.setAttribute("id", "punteggio-squadra1");
    punteggioSquadra2.setAttribute("id", "punteggio-squadra2");
    containerSquadra1.appendChild(punteggioSquadra1);
    containerSquadra2.appendChild(punteggioSquadra2);
    punteggioSquadra1.textContent = "0";
    punteggioSquadra2.textContent = "0";
}
function creaZonaPunteggio(containerIniziale) {
    if (containerIniziale) {
        let containerSquadra1 = document.createElement("div");
        let containerSquadra2 = document.createElement("div");
        containerSquadra1.classList.add("container-squadra1");
        containerSquadra2.classList.add("container-squadra2");
        containerIniziale.appendChild(containerSquadra1);
        containerIniziale.appendChild(containerSquadra2);
        let nomeSquadra1 = document.createElement("p");
        let nomeSquadra2 = document.createElement("p");
        nomeSquadra1.classList.add("nome-squadra-1");
        nomeSquadra2.classList.add("nome-squadra-2");
        nomeSquadra1.textContent = "Squadra 1";
        nomeSquadra2.textContent = "Squadra 2";
        containerSquadra1.appendChild(nomeSquadra1);
        containerSquadra2.appendChild(nomeSquadra2);
        punteggioIniziale(containerSquadra1, containerSquadra2);
    }
}
function clickInizia(bottone, containerIniziale, callback) {
    if (bottone) {
        bottone.addEventListener("click", () => {
            nascondiBottone(bottone);
            const dropdownDiv = document.querySelector("[data-dropdown]");
            creaZonaPunteggio(containerIniziale);
            if (dropdownDiv) {
                dropdownDiv.style.display = "block";
            }
            callback(); // Eseguiamo la funzione di callback quando il processo è finito
        });
    }
}
export { clickInizia };
