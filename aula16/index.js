// criando um array

const arrai = [1, 2, 3];


// criando um objeto 

const pessoa = {
    nome: 'Aliffer',
    sobrenome: 'Farias',
    idade: 19

};

// acessando as informações do objeto

console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)

// funcao que cria pessoas

function criaPessoa (nome, sobrenome, idade) {  
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    }; 
} // quando o nome  dos objetos é igual ao parametro como nesse exemplo acinma ^^ podemos abreviar a funcao
// function criaPessoa (nome, sobrenome, idade) {  
//     return{nome, sobrenome, idade }; 
// }
const pessoa1 = criaPessoa('Aliffer', 'Farias', 19);
const pessoa2 = criaPessoa('Sury', 'Farias', 18);
const pessoa3 = criaPessoa('Junior', 'Barbosa', 39);
const pessoa4 = criaPessoa('Ricardo', 'Oliveira', 76);
const pessoa5 = criaPessoa('Iara', 'José', 23);

console.log(pessoa1)  
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)
console.log(pessoa5)

// acessando as informações do objeto criado pela funcao de criar objetos poderiamos acessar qualquer uma das 5 pessoas, ou apenas o nome sobrenome e idade individualmente

console.log(pessoa3.nome)
console.log(pessoa3.sobrenome)
console.log(pessoa3.idade)