function meuEscopo() {

    const form = document.querySelector('#form');
    const resultados = document.querySelector('#resultados')

    function recebeEventoForm(e) {
        e.preventDefault();

        const inpPeso = e.target.querySelector('#peso')
        const inpAltura = e.target.querySelector('#altura')

        const peso = Number(inpPeso.value);
        const altura = Number(inpAltura.value);

        imcReal = getImc(peso, altura)

        if ((peso <= 20 || peso >= 480) && (altura <= 1.00 || altura >= 2.50)) {
            resultados.innerHTML = `<br> <p>Ambos invalidos</p> `

        }
        else if (peso <= 20 || peso >= 480) {
            resultados.innerHTML = `<br> <p>Peso invalido</p> `

        } else if (altura <= 1.00 || altura >= 2.50) {
            resultados.innerHTML = `<br> <p>Altura invalida</p> `
        } else {
            if (imcReal <= 18.4) {
                resultados.innerHTML = `<br> <p>IMC: ${imcReal.toFixed(2)} | Abaixo do peso</p> `
            } else if (imcReal >= 18.5 && imcReal <= 24.9) {
                resultados.innerHTML = `<br> <p>IMC: ${imcReal.toFixed(2)} | Peso normal</p> `
            } else if (imcReal >= 25 && imcReal <= 29.9) {
                resultados.innerHTML = `<br> <p>IMC: ${imcReal.toFixed(2)} | Sobrepeso </p> `
            }
            else if (imcReal >= 30 && imcReal <= 34.9) {
                resultados.innerHTML = `<br> <p>IMC: ${imcReal.toFixed(2)} | Obesidade grau 1 </p> `
            }
            else if (imcReal >= 35 && imcReal <= 39.9) {
                resultados.innerHTML = `<br> <p>IMC: ${imcReal.toFixed(2)} | Obesidade grau 2 </p> `
            }
            else if (imcReal > 40) {
                resultados.innerHTML = `<br> <p>IMC: ${imcReal.toFixed(2)} | Obesidade grau 3 </p> `
            }
        }
    }
    form.addEventListener('submit', recebeEventoForm);

    function getImc(peso, altura) {
        const imc = peso / (altura * altura)
        return imc;
    }

}
meuEscopo();
