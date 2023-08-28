/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
  };
  const b = a;

  b.nome = 'João';
  console.log(a);   // note que mesmo mudando apenas o b o valor de a foi alterado e se mudassemos a o de b também seria
  console.log(b);


// caso queiramos que o valor de b não seja alterado caso alteremos o de a podemos fazer o seguinte


let x = [1, 2, 3]; // note que mesmo alterando o valor do x, não aconteceu nada com o y, pois usamos [...x] criamos uma copia em vez de referenciar o mesmo local na memoria
let y = [...x]

x[2] = 0
console.log(x, y)