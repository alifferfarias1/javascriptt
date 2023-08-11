const nome = 'aliffer';
const sobrenome = 'farias';
const idade = 19;
const peso =  70;
const alturaEmMetros = 1.67;

let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal =  peso / (alturaEmMetros * alturaEmMetros)
anoNascimento = 2023 - idade - 1

console.log(nome, sobrenome, 'tem', idade, 'anos, e pesa', peso,'Kg tem', alturaEmMetros, 'de altura e seu imc é de', indiceMassaCorporal, nome, 'nasceu em', anoNascimento)
console.log('')
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);