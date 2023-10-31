function meuEscopo() {
    const form = document.querySelector('.medias');
    const resultados = document.querySelector('#resultados');
    const paragrafos = resultados.querySelectorAll('p')

    // const corPrimaria = getComputedStyle(root).getPropertyValue('--cor-primaria');
    // const tamanhoFonte = getComputedStyle(root).getPropertyValue('--tamanho-fonte');    


  
    function recebeEventoForm(e) {
      e.preventDefault();
  
      const inputNota1 = e.target.querySelector('#nota');
      const inputNota2 = e.target.querySelector('#nota2');
  
      const nota1 = Number(inputNota1.value);
      const nota2 = Number(inputNota2.value);
      let media = (nota1 + nota2) / 2;
  
      if (media < 7) {
        resultados.innerHTML = reprovado(media);
        paragrafos.forEach(paragrafo => {
          paragrafo.style.backgroundColor = 'red';
        });
      } else {
        resultados.innerHTML = `<p>Sua média é de ${media.toFixed(2)}</p>`;
        paragrafos.forEach(paragrafo => {
          paragrafo.style.backgroundColor = 'green';
        });
      }
    }
  
    function reprovado(media) {
      return `<p>Você reprovou faltando: ${media.toFixed(2)} pontos </p>`;
    }
  
    form.addEventListener('submit', recebeEventoForm);
  }
  
  meuEscopo();


