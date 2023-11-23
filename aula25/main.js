// ...rest ... spread

const numeros = [[1, 2, 3],[4, 5, 6],[7, 8, 9],];
console.log(numeros[0][0])














const [um,  ...resto] = numeros; // com um espaço em branco podemos pular alguma valor
console.log(um,  resto)
// console.log(um, dois, tres, cinco);
// console.log(resto);