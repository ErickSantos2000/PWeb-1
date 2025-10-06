// vetor
const vetor = ["A", "B", "C", "D", "E", "F"];

// função de alta ordem  
let repeat = (n, exibir) => {
    for (let i = 0; i < n; i++) {
        exibir(vetor[i]);
    }
}

// callback para lista desordenada 
let exibirListaDesordenada = (valor) => {
    let numerosUl = document.getElementById('letras'); // pega o <ul> no DOM pelo id
    let li = document.createElement('li');            // cria um novo <li> em memória
    li.textContent = valor;                            // define o conteúdo do <li>
    numerosUl.appendChild(li);                         // adiciona o <li> ao <ul> na página
}

// callback para cards 
let exibirCards = (valor) => {
    let cardsContainer = document.getElementById('cards'); // pega o container dos cards
    let card = `
        <div class="card">
            <div class="card-body">${valor}</div>
        </div>`; // cria o HTML do card
    cardsContainer.insertAdjacentHTML('beforeend', card); // adiciona o card ao container
}

let quantidade = vetor.length;
repeat(quantidade, exibirListaDesordenada);
repeat(quantidade, exibirCards);
