//Creo l'Array

const students = [
    {
        nome: 'Vincenzo',
        cognome: 'Rossi',
        anni: 23,
    },
    {
        nome: 'Marco',
        cognome: 'Ferrari',
        anni: 21,
    },
    {
        nome: 'Francesco',
        cognome: 'Costa',
        anni: 25,
    },
];


//Prendo l'elemento 'display'
const display = document.getElementById('display');

// Funzione che stampa l'array in pagina
const printObjectArray = (ObjectArray, targetElement) => {
    let content = '';
    for (let i = 0; i < ObjectArray.length; i++) {
        content += '<ul>';
        const currentObject = ObjectArray[i];
        for (let key in currentObject)   {
            content += `<li><strong>${key}: </strong> ${currentObject[key]}</li>`;
        }
        content += '</ul>'
        content += '<hr>'
    }
    targetElement.innerHTML = content;
}

//Chiamo la funzione
printObjectArray(students, display)



//Chiedo all'utente le proprietà di un nuovo oggetto
let newName;
do {
    newName = prompt('Inserisci Nome Studente').trim();
} while (!newName);

let newSurname;
do { newSurname = prompt('Inserisci Cognome Studente').trim();
} while(!newSurname);

let newAge;
do { newAge = parseInt(prompt('Inserisci Età Studente').trim());
} while (isNaN(newAge));