class Pagination {
    constructor(_items, _pageSize) {
        this.items = _items;
        this.pageSize = _pageSize;
    }
}

var firstRow = document.getElementById('first-row');
var secondRow = document.getElementById('second-row');

let currentPage = 0;

const items = [
    { id: 1, nome: 'Cosimo', cognome: 'Gargiullo', classe: 'A' },
    { id: 2, nome: 'Laura', cognome: 'Gaudencio', classe: 'A' },
    { id: 3, nome: 'Francesca', cognome: 'Pozzi', classe: 'B' },
    { id: 4, nome: 'Riccardo', cognome: 'Sennati', classe: 'B' },
    { id: 5, nome: 'Alberto', cognome: 'Scarsi', classe: 'C' },
    { id: 6, nome: 'Mario', cognome: 'Rossi', classe: 'C' },
    { id: 7, nome: 'Luigi', cognome: 'Pandolgo', classe: 'D' },
    { id: 8, nome: 'Gaetano', cognome: 'Speranza', classe: 'D' }
]

loading = () => {
    firstRow.innerHTML = `<th scope="row">${items[currentPage].id}</th>
    <td>${items[currentPage].nome}</td>
    <td>${items[currentPage].cognome}</td>
    <td>${items[currentPage].classe}</td>`
    secondRow.innerHTML = `<th scope="row">${items[currentPage + 1].id}</th>
    <td>${items[currentPage + 1].nome}</td>
    <td>${items[currentPage + 1].cognome}</td>
    <td>${items[currentPage + 1].classe}</td>`
}

first = () => {
    currentPage = 0;
    firstRow.innerHTML = `<th scope="row">${items[currentPage].id}</th>
    <td>${items[currentPage].nome}</td>
    <td>${items[currentPage].cognome}</td>
    <td>${items[currentPage].classe}</td>`
    secondRow.innerHTML = `<th scope="row">${items[currentPage + 1].id}</th>
    <td>${items[currentPage + 1].nome}</td>
    <td>${items[currentPage + 1].cognome}</td>
    <td>${items[currentPage + 1].classe}</td>`
}

prev = () => {
    firstRow.innerHTML = `<th scope="row">${items[currentPage - 2].id}</th>
    <td>${items[currentPage - 2].nome}</td>
    <td>${items[currentPage - 2].cognome}</td>
    <td>${items[currentPage - 2].classe}</td>`
    secondRow.innerHTML = `<th scope="row">${items[currentPage - 1].id}</th>
    <td>${items[currentPage - 1].nome}</td>
    <td>${items[currentPage - 1].cognome}</td>
    <td>${items[currentPage - 1].classe}</td>`
    currentPage = currentPage - 2;
}

next = () => {
    firstRow.innerHTML = `<th scope="row">${items[currentPage + 2].id}</th>
    <td>${items[currentPage + 2].nome}</td>
    <td>${items[currentPage + 2].cognome}</td>
    <td>${items[currentPage + 2].classe}</td>`
    secondRow.innerHTML = `<th scope="row">${items[currentPage + 3].id}</th>
    <td>${items[currentPage + 3].nome}</td>
    <td>${items[currentPage + 3].cognome}</td>
    <td>${items[currentPage + 3].classe}</td>`
    currentPage = currentPage + 2;
}
last = () => {
    currentPage = 6;
    firstRow.innerHTML = `<th scope="row">${items[currentPage].id}</th>
    <td>${items[currentPage].nome}</td>
    <td>${items[currentPage].cognome}</td>
    <td>${items[currentPage].classe}</td>`
    secondRow.innerHTML = `<th scope="row">${items[currentPage + 1].id}</th>
    <td>${items[currentPage + 1].nome}</td>
    <td>${items[currentPage + 1].cognome}</td>
    <td>${items[currentPage + 1].classe}</td>`
}  