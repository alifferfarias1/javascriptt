var primos = [2,3,5,7,11,13,17];

primos.splice(2,2);

console.log(primos); //imprimirá 2,3,11,13,17’

console.log(primos.length); //imprimirá 5

primos.length = 3;

console.log(primos); //imprimirá 3 valores pois o tamanho do array foi definido como 3