function somaNums(A, B) {
    return (A + B);
}

function prodNums(A, B) {
    return (A * B);
}

function quadSomaNums(A, B) {
    return (prodNums(A, A) + 2 * prodNums(A, B) + prodNums(B, B));
}

console.log(somaNums(2, 5))
console.log(prodNums(2, 2))
console.log(quadSomaNums(3, 5))

const meses = ["Janeiro", "Fevereiro", "Março", "Abril"];
let copiaMeses = [];
for (let i = 0; i < meses.length; i++) {
    copiaMeses[i] = "Mês de " + meses[i];
}

console.log(copiaMeses)