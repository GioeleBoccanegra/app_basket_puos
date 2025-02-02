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
        containerSquadra1.innerHTML = `<p>squadra1</p>`;
        containerSquadra2.innerHTML = `<p>squadra2</p>`;
        punteggioIniziale(containerSquadra1, containerSquadra2);
    }
}
function creaTimer() {
    const timerContainer = document.querySelector("[data-future-container]");
}
function clickInizia(bottone, containerIniziale) {
    if (bottone) {
        bottone.addEventListener("click", () => {
            nascondiBottone(bottone);
            creaZonaPunteggio(containerIniziale);
        });
    }
}
export { clickInizia };
