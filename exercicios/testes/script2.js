function meuEscopo() {
  const form = document.querySelector('.medias');
  const resultados = document.querySelector('#resultados');

  // const corPrimaria = getComputedStyle(root).getPropertyValue('--cor-primaria');
  // const tamanhoFonte = getComputedStyle(root).getPropertyValue('--tamanho-fonte');    



  function recebeEventoForm(e) {
    e.preventDefault();

    const inputNota1 = e.target.querySelector('#nota');
    const inputNota2 = e.target.querySelector('#nota2');

    const nota1 = Number(inputNota1.value);
    const nota2 = Number(inputNota2.value);
    let media = (nota1 + nota2) / 2;

    const p = document.createElement('p');

    if (media < 7) {
      p.textContent = `Você reprovou, nota de aprovação mínima: [6] sua nota: ${media.toFixed(2)} pontos`;
      p.style.backgroundColor = 'red';
      p.style.color = 'white'
    } else {
      p.textContent = `Você foi aprovado  nota de aprovação mínima: [6] sua nota: ${media.toFixed(2)} pontos`;
      p.style.backgroundColor = 'green';
      p.style.color = 'white' // Defina o background color como verde
    }

    resultados.innerHTML = ''; // Limpar o conteúdo anterior
    resultados.appendChild(p); // Adicionar o novo <p> com o estilo atualizado
    resultados.classList.add('green')
  }






  form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();


