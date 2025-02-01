
import { clickInizia, controllaClickDiv, Bottone, ADiv } from './view.js';

const inizia: Bottone = document.querySelector("[data-start-button]");
const containerIniziale: ADiv = document.querySelector("[data-future-container]");



clickInizia(inizia, containerIniziale);
controllaClickDiv()
