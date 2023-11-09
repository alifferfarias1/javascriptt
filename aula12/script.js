let num1 = 2.5;
let num2 = 3.5;

let num3 = 3.942842874


console.log(num1.toString() + num2); // transformei o num1 em string e concatenei com o num2

num1 = num1.toString() // alterando o valor da variavel num 1 para string permanentemente

console.log(typeof num1) // mostrando o novo tipo da variavel que é str

console.log(num3.toFixed(2)) // arrendondando casas decimais 

console.log(Number.isInteger(num3)) // verifica se o numero é um inteiro e retorna true or false
console.log(Number.isNaN(num3)) // verifica se o o numero é o NaN e retorna true or false

// javascript tem uma certa imprecisão com numeros pequenos

let numImpreciso = 0.7;
let outroImpreciso = 0.1;

console.log('------------------------')

numImpreciso += outroImpreciso;
console.log(numImpreciso)
numImpreciso += outroImpreciso;
console.log(numImpreciso)

numImpreciso = Number(numImpreciso.toFixed()) 

console.log(numImpreciso,  Number.isInteger(numImpreciso))
numImpreciso += outroImpreciso;


console.log(numImpreciso, Number.isInteger(numImpreciso))


