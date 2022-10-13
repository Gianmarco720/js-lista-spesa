// creo una lista della spesa
const shoppingList = [
    'latte',
    'uova',
    'zucchero',
    'sale',
    'farina',
    'olio',
    'acqua',
    'pane',
    'frutta',
    'verdure'
];

// seleziono l'elemento della DOM dove stampare la lista
const listElement = document.querySelector('ul');

// utilizzo del ciclo while
let i = 0;
while (i < shoppingList.length) {
    const liElement = shoppingList[i];
    const itemEl = `<li>${liElement}</li>`;
    listElement.insertAdjacentHTML('beforeend', itemEl);
    i++;
    console.log(liElement);
}