// ...rest ... spread

const numeros = [[1, 2, 3],[4, 5, 6],[7, 8, 9],];
console.log(numeros[0][0])














const [um, dois, ...resto] = numeros; // com um espaço em branco podemos pular alguma valor
console.log(um, dois, resto)
// console.log(um, dois, tres, cinco);
// console.log(resto);