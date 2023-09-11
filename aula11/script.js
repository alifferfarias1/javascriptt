let nome = prompt("Digite o seu nome: ");
let comprimento = nome.length;
segundaLetra = nome.charAt(1)
let indice = nome.indexOf('f');
let ultimoIndice = nome.lastIndexOf('f');
let ultimasTres = nome.slice(-3, nome.length);
let nomeGrande = nome.toUpperCase();
let nomePequeno = nome.toLowerCase();

document.body.innerHTML +=  `Seu nome é ${nome} <br>`;
document.body.innerHTML += `Seu nome tem ${comprimento} letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra} <br>`;
document.body.innerHTML += `Qual o primeiro índice da letra f no seu nome? ${indice} <br>`;
document.body.innerHTML += `Qual o último índice da letra f no seu nome? ${ultimoIndice}<br>`;
document.body.innerHTML += `As palavras do seu nome são ${nome.split(' ')}<br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimasTres} <br>`; // nome.slice(-3, nome.length); pega os caracteres começando 3 posições a partir do final até o final da string.
document.body.innerHTML +=  `Seu nome com letras maiúsculas: ${nomeGrande} <br>`;
document.body.innerHTML += `Seu nome com letras minusculas: ${nomePequeno} <br>`;
