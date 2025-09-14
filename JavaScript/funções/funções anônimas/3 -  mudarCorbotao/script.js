// 3. Mouse em cima
// Crie um botão.
// Quando o mouse passar em cima dele (mouseover), use 
// função anônima para trocar a cor de fundo do botão.

const botao = document.getElementById("mouseButon");

botao.addEventListener('mouseover', function (){
    botao.classList.remove('botaoOff')
    botao.classList.add('botaoOn')
})

botao.addEventListener('mouseout', function (){
    botao.classList.add('botaoOff')
    botao.classList.remove('botaoOn')
})