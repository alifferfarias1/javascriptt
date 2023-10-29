const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body); // selecionando todos os elementos de estilo do body
const backgroundColorBody = estilosBody.backgroundColor; // selecionando o backgroundColor dos estilos

console.log(backgroundColorBody) // imprimindo no console a cor de Bg selecionada

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody; // trocando a cor de fundo dos 4 paragrafos
    p.style.color = '#ffffff' // trocando a cor das letras dos 4 paragrafos
}