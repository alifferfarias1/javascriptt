const elementos = [
    {tag: 'p', texto: '<p>'},
    {tag: 'div', texto: '<div>'},
    {tag: 'footer', texto: '<footer>'},
    {tag: 'section', texto: '<section>'},
]
  
const container = document.querySelector('.container') // selecionando a class container do html

for (let i = 0; i < elementos.length; i++){
     // aqui criamos um novo elemento primeiro elementos[0].tag que seria o <p> e assim por diante
    const novoElemento = document.createElement(elementos[i].tag) 
    // aqui definimos o conteudo do novo elementos elementos[0].texto que seria frase 1 e assim por diante
    novoElemento.textContent = elementos[i].texto
    // aqui adicionamos o novoElemento ja com seu textcontent dentro do container selecionado acima
    container.appendChild(novoElemento);
    }