let nome = prompt('Digite o seu nome: ');

document.body.innerHTML += `Seu nome tem ${nome.length} letras <br>`;
document.body.innerHTML += `A primeira letra do seu nome é ${nome.charAt(0)} <br>`;
document.body.innerHTML += `Seu nome tem ${nome.split(' ')} essas palavras <br>`;

let indice = nome.indexOf('f')
let ultimoIndice = nome.lastIndexOf('f');
let ultimasTres = nome.slice(-3, nome.length);
let nomeGrande = nome.toUpperCase();
let nomePequeno = nome.toLowerCase();

document.body.innerHTML += `a primeira letra f está no indice ${indice} <br>`;
document.body.innerHTML += `a ultima letra f está no indice ${ultimoIndice} <br>`;
document.body.innerHTML += `as ultimas tres letras do seu nome são ${ultimasTres} <br>`;
document.body.innerHTML += `Seu nome grande ${nomeGrande}<br>`;
document.body.innerHTML += `Seu nome pequeno ${nomePequeno}<br>`;







