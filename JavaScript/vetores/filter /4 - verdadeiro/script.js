const valores = [0, 1, "", "texto", null, undefined, true, false];

const truthy = valores.filter(v => Boolean(v));

console.log(truthy); 

