// capturar evento de submit do formulario

const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inpPeso = event.target.querySelector('#peso')
    const inpAltura = event.target.querySelector('#altura')

    const peso = Number(inpPeso.value);
    const altura = Number(inpAltura.value);

    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura invalida', false)
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu imc é ${imc} (${nivelImc}).`;

    setResultado(msg, true)


});



function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc >= 39.9) {
        return nivel[5]
    } if (imc >= 34.9) {
        return nivel[4]
    }
    if (imc >= 29.9) {
        return nivel[3]
    }
    if (imc >= 24.9) {
        return nivel[2]
    }
    if (imc >= 18.5) {
        return nivel[1]
    }
    if (imc < 18.5) {
        return nivel[0]
    }
}





function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}


function criaP() {
    const p = document.createElement('p');
    return p
    // p.classList.add('paragrafo-resultado')

}


function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');


    }

    p.textContent = msg;
    resultado.appendChild(p)
}
