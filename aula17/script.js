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
  console.log(a, b)
  console.log(a.nome)

b.nome = 'João';
 console.log('A = ',a);   // note que mesmo mudando apenas o b o valor de a foi alterado e se mudassemos a o de b também seria
   console.log('B = ',b);


// // caso queiramos que o valor de b não seja alterado caso alteremos o de A  ou vice-versa podemos fazer o seguinte


let x = [1, 2, 3]; // note que mesmo alterando o valor do y, não aconteceu nada com o x, pois usamos [...x] criamos uma copia em vez de referenciar o mesmo local na memoria
let y = [...x]

y[2] = 0
console.log('X = ',x)
console.log('Y = ',y)