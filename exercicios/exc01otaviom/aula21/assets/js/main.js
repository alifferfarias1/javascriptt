// capturar evento de submit do formulario

const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inpPeso = event.target.querySelector('#peso')
    const inpAltura = event.target.querySelector('#altura')

    const peso = Number(inpPeso.value);
    const altura = Number(inpAltura.value);
    

});

function criaP() {
    const p = document.createElement('p');
    return p
    // p.classList.add('paragrafo-resultado')

}


function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
}