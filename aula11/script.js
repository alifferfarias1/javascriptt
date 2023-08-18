let nome = prompt("Digite o seu nome: ");
document.body.innerHTML +=  `Seu nome é ${nome} <br>`;

let comprimento = nome.length;
document.body.innerHTML += `Seu nome tem ${comprimento} letras <br>`;

segundaLetra = nome.charAt(1)
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra} <br>`;

let indice = nome.indexOf('f');
let ultimoIndice = nome.lastIndexOf('f');
document.body.innerHTML += `Qual o primeiro índice da letra f no seu nome? ${indice} <br>`;
document.body.innerHTML += `Qual o último índice da letra f no seu nome? ${ultimoIndice}<br>`;

document.body.innerHTML += `As palavras do seu nome são ${nome.split(' ')}<br>`;


let ultimasTres = nome.slice(-3, nome.length);
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimasTres} <br>`;

let nomeGrande = nome.toUpperCase();
let nomePequeno = nome.toLowerCase();

document.body.innerHTML +=  `Seu nome com letras maiúsculas: ${nomeGrande} <br>`;
document.body.innerHTML += `Seu nome com letras minusculas: ${nomePequeno} <br>`;
