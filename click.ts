
class Squadra {
  constructor(public nome: string, public punteggio: number, public id: string) {
  }
}

const squadra1: Squadra = new Squadra("Squadra 1", 0, "punteggio-squadra1");
const squadra2: Squadra = new Squadra("Squadra 2", 0, "punteggio-squadra2")
const containerSquadra1 = document.querySelector("container-squadra1") as HTMLDivElement
const containerSquadra2 = document.querySelector("container-squadra2") as HTMLDivElement


function controllaClickDiv(squadra1: Squadra, squadra2: Squadra, containerSquadra1: HTMLDivElement, containerSquadra2: HTMLDivElement): void {
  if (containerSquadra1) {
    containerSquadra1.addEventListener("click", () => {
      aggiornaPunteggio(squadra1)
    });
  }

  if (containerSquadra2) {
    containerSquadra2.addEventListener("click", () => {
      aggiornaPunteggio(squadra2)
    });
  }
}



function aggiornaPunteggio(squadra: Squadra) {
  let punteggioAttuale: HTMLElement | null = document.getElementById(squadra.id)
  if (punteggioAttuale) {
    squadra.punteggio += 1
    punteggioAttuale.textContent = String(squadra.punteggio)
    return squadra.punteggio
  } else {
    console.log("non trovato paragro fareggio della squadra: " + squadra.nome)
  }

}

controllaClickDiv(squadra1, squadra2, containerSquadra1, containerSquadra2)
