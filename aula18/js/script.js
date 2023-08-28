function meuEscopo() {
    const form = document.querySelector('#form');  // Selecionando o formulário corretamente
    const resultados = document.querySelector('#resultados');  // Selecionando o elemento de resultados

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        
        const nome = form.querySelector('#nome');  // Selecionando os campos corretamente
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
    
        console.log(pessoas)
        resultados.innerHTML += `<p>Nome:${nome.value} <br> Sobrenome: ${sobrenome.value} <br> Peso: ${peso.value} <br> Altura: ${altura.value}</p> `;

}

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
