var alunos = ['Alex', 'Anna', 'João']; // array de strings

alunos[alunos.length] = 'Maria';

console.log('Alunos turma 1: ', alunos)

var alunos2 = ['Alex', 'Anna', 'João'];
alunos2.splice(1,0,'Helena');
console.log('Turma 2: ', alunos2); //imprimirá 'Alex, 'Helena', 'João'




var frutas = ['Laranja', 'Uva', 'Limão'];

delete frutas[0]
let frutaRemovida = frutas.pop()

console.log(frutas, "|", frutaRemovida) // a fruta removida foi limão pois pop remove o ultimo indice do array


