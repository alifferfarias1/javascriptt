const numero = Number(prompt('Digite o seu numero: '));

const numeroTitulo = document.getElementById('numero-titulo');
const textoUm = document.getElementById('texto');

numeroTitulo.innerHTML += numero;

let raizQuadrada = numero ** 0.5

textoUm.innerHTML = ' '
textoUm.innerHTML += `<p>A raiz quadrada do seu numero é: ${raizQuadrada.toFixed(2)} </p>`;
textoUm.innerHTML += `<p>Seu numero é inteiro? ${Number.isInteger(numero)} </p>`;
textoUm.innerHTML += `<p> É um NaN: ${Number.isNaN(numero)} </p>`;
textoUm.innerHTML += `<p>Arrendondando para cima: ${Math.ceil(numero)} </p>`;
textoUm.innerHTML += `<p>Arrendondando para Baixo: ${Math.floor(numero)} </p>`;
textoUm.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;




