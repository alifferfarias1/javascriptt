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

        } else if (altura.value <= 1.00 || altura >= 2.50) {
            resultados.innerHTML = `<br> <p>Altura invalida</p> `
        } else {
            resultados.innerHTML = `<br> <p>IMC: ${imc.toFixed(2)}</p>  `


        }


    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
