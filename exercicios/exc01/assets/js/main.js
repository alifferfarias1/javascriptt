function meuEscopo() {

const form = document.querySelector('#form');
const resultados = document.querySelector('#resultados')

let peso = form.querySelector('#peso');
let altura = form.querySelector('#altura');


const pessoas = [];

function recebeEventoForm(evento) {
    evento.preventDefault();

    pessoas.push({
        peso: peso.value,
        altura: altura.value
    })

    let imc = peso.value / (altura.value * altura.value)

    resultados.innerHTML = `<br> IMC: ${imc.toFixed(2)}</p>  `

}
form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
