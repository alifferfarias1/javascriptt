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



        if ((peso.value <= 20 || peso.value >= 480) && (altura.value <= 1.00 || altura >= 2.50)) {
            resultados.innerHTML = `<br> <p>Ambos invalidos</p> `

        }
        else if (peso.value <= 20 || peso.value >= 480) {
            resultados.innerHTML = `<br> <p>Peso invalido</p> `

        } else if (altura.value <= 1.00 || altura.value >= 2.50) {
            resultados.innerHTML = `<br> <p>Altura invalida</p> `
        } else {
            if (imc <= 18.4) {
                resultados.innerHTML = `<br> <p>IMC: ${imc.toFixed(2)} | Abaixo do peso</p> `
            } else if (imc >= 18.5 && imc <= 24.9) {
                resultados.innerHTML = `<br> <p>IMC: ${imc.toFixed(2)} | Peso normal</p> `
            } else if (imc >= 25 && imc <= 29.9) {
                resultados.innerHTML = `<br> <p>IMC: ${imc.toFixed(2)} | Sobrepeso </p> `
            }
            else if (imc >= 30 && imc <= 34.9) {
                resultados.innerHTML = `<br> <p>IMC: ${imc.toFixed(2)} | Obesidade grau 1 </p> `
            }
            else if (imc >= 35 && imc <= 39.9) {
                resultados.innerHTML = `<br> <p>IMC: ${imc.toFixed(2)} | Obesidade grau 2 </p> `
            }
            else if (imc > 40) {
                resultados.innerHTML = `<br> <p>IMC: ${imc.toFixed(2)} | Obesidade grau 3 </p> `
            }
        }
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
