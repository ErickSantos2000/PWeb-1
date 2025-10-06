// // === SETINTERVAL ====
// // cria um intervalo que vai rodar a cada 2 segundos
// let timerId = setInterval(() => {
//   alert("Interval executou!");
// }, 2000);

// // cancela o intervalo depois de 5 segundos
// setTimeout(() => {
//   clearInterval(timerId);
//   alert("Interval cancelado!");
// }, 6000);

// // ==== SETTIMEOUT ====
// // setTimeout que vai rodar após 10 segundos
// let timer = setTimeout(() => {
//   alert("Timeout executou!");
// }, 10000); 

// // setTimeout que cancela o primeiro após 5 segundos
// setTimeout(() => {
//   clearTimeout(timer);
//   alert("Timeout cancelado antes de executar!");
// }, 5000); 

// console.log("Início");

// setTimeout(() => {
//   console.log("Executou após 2 segundos");
// }, 2000);

// console.log("Fim");


let contador = 0;

let interval = setInterval(() => {
  
  contador++;
  if (contador === 10) clearInterval(interval); // para após 2 execuções
  console.log(contador + " - Interval executou");
}, 1000);
