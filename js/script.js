// Object Creation

const studente = {
    nome: 'Vincenzo',
    cognome: 'Rossi',
    anni: 23,
};

const display = document.getElementById('display');

let content = '';
for (let property in studente) {
    content += `<div><strong>${property}: </strong>${studente[property]}</div>`;
}

display.innerHTML = content;