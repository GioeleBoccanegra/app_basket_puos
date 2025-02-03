"use strict";
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.getElementById('dropdownContent');
// Aggiunge un listener per il click sul bottone per alternare la classe "show"
if (dropdownButton) {
    dropdownButton.addEventListener('click', () => {
        if (dropdownContent) {
            if (dropdownButton.textContent == "Mostra impostazioni") {
                dropdownContent.classList.toggle('show');
                dropdownButton.textContent = "Nascondi impostazioni";
            }
            else {
                dropdownContent.classList.toggle('show');
                dropdownButton.textContent = "Mostra impostazioni";
            }
        }
    });
}
