function saudacao(nome) {
    return `Bom dia ${nome}`
}



const variavel = saudacao('Luiz');

console.log(variavel)

// funcao de soma
// declarei valores inicialmente para x e y caso, não seja enviado nenhum argumento para seu parametro        
function soma(x = 1, y = 7){
    let results = x + y;
    return  results;
}
resultado = soma(1, 2)

console.log(resultado)
//poderiamos exibir direto no console.log(soma(1, 2))

console.log(soma(3))

// outro metodos para criar funções
// funcao anonima

const raiz = function (n) { // pegando a raiz de um numero com a função anonima
    return n ** 0.5
};

console.log(raiz(9))

// arrow function
const raizGrande1 = (n) => { // pegando a raiz de um numero com a função arrow
    return n ** 0.5
};

console.log(raizGrande1(49));
