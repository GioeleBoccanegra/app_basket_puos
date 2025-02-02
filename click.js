//click.ts
class Squadra {
    constructor(nome, punteggio, id) {
        this.nome = nome;
        this.punteggio = punteggio;
        this.id = id;
    }
}
const squadra1 = new Squadra("Squadra 1", 0, "punteggio-squadra1");
const squadra2 = new Squadra("Squadra 2", 0, "punteggio-squadra2");
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
export { Squadra, squadra1, squadra2, controllaClickDiv };
