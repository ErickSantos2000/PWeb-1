// Document é um obj espacial do navegador, ele representa toda pagina web carregada
// Ele procura na página HTML um elemento que tenha o id especificado.
// Se encontrar: retorna esse elemento.
// Se não encontrar: retorna null.

const botao = document.getElementById('botaoConverter');
const input = document.getElementById('input');
const resultado = document.getElementById('resultado');
botao.addEventListener('click', function(){  
    
let cotacaoDolar = 5.31;
// input.value recebe o valor do input
const valorReais = parseFloat(input.value);

// Converte para dólar
const valor = valorReais / cotacaoDolar; 
   
// É um método que permite você ouvir eventos em um elemento HTML
// Quando o evento acontece:
// (ex: clique, tecla pressionada, mouse passando), ele executa uma função que você definiu.

// define uma função anônima como parâmetro do addEventListener,
// que sera executada quando o evento click acontecer
resultado.textContent = "US$ " + valor.toFixed(2);})
