const containerIniziale = document.querySelector("[data-future-container]");
const inizia = document.querySelector("[data-start-button]");
class Squadra {
    constructor(nome, punteggio, id) {
        this.nome = nome;
        this.punteggio = punteggio;
        this.id = id;
    }
}
function nascondiBottone(bottone) {
    bottone.style.display = "none";
}
function punteggioIniziale(containerSquadra1, containerSquadra2, squadra1, squadra2) {
    let punteggioSquadra1 = document.createElement("p");
    let punteggioSquadra2 = document.createElement("p");
    punteggioSquadra1.classList.add("punteggio");
    punteggioSquadra2.classList.add("punteggio");
    punteggioSquadra1.setAttribute("id", "punteggio-squadra1");
    punteggioSquadra2.setAttribute("id", "punteggio-squadra2");
    containerSquadra1.appendChild(punteggioSquadra1);
    containerSquadra2.appendChild(punteggioSquadra2);
    punteggioSquadra1.textContent = String(squadra1.punteggio);
    punteggioSquadra2.textContent = String(squadra2.punteggio);
}
function creaZonaPunteggio(containerIniziale, squadra1, squadra2) {
    if (containerIniziale) {
        let containerSquadra1 = document.createElement("div");
        let containerSquadra2 = document.createElement("div");
        containerSquadra1.classList.add("container-squadra1");
        containerSquadra2.classList.add("container-squadra2");
        containerIniziale.appendChild(containerSquadra1);
        containerIniziale.appendChild(containerSquadra2);
        containerSquadra1.innerHTML = `<p>${squadra1.nome}</p>`;
        containerSquadra2.innerHTML = `<p>${squadra2.nome}</p>`;
        punteggioIniziale(containerSquadra1, containerSquadra2, squadra1, squadra2);
        controllaClickDiv(squadra1, squadra2, containerSquadra1, containerSquadra2);
    }
}
function clickInizia(bottone, containerIniziale) {
    if (bottone) {
        bottone.addEventListener("click", () => {
            nascondiBottone(bottone);
            const squadra1 = new Squadra("Squadra 1", 0, "punteggio-squadra1");
            const squadra2 = new Squadra("Squadra 2", 0, "punteggio-squadra2");
            creaZonaPunteggio(containerIniziale, squadra1, squadra2);
        });
    }
}
function controllaClickDiv(squadra1, squadra2, containerSquadra1, containerSquadra2) {
    if (containerSquadra1) {
        containerSquadra1.addEventListener("click", () => {
            aggiornaPunteggio(squadra1);
        });
    }
    if (containerSquadra2) {
        containerSquadra2.addEventListener("click", () => {
            aggiornaPunteggio(squadra2);
        });
    }
}
function aggiornaPunteggio(squadra) {
    let punteggioAttuale = document.getElementById(squadra.id);
    if (punteggioAttuale) {
        squadra.punteggio += 1;
        punteggioAttuale.textContent = String(squadra.punteggio);
        return squadra.punteggio;
    }
    else {
        console.log("non trovato paragro fareggio della squadra: " + squadra.nome);
    }
}
export { clickInizia, controllaClickDiv };
