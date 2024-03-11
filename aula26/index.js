function isPrimo(numero) {
    if (numero <= 1) {
        return 'Não é primo';
    }

    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            soma++
        }
    }

    if (soma <= 2) {
        return 'Eh primo'
    } else {
        return 'Não é primo'
    }
}
console.log(isPrimo(1)); // Deve retornar 'É primo'
console.log(isPrimo(2))
console.log(isPrimo(3)) //
console.log(isPrimo(4)) //
console.log(isPrimo(5)) //
console.log(isPrimo(6)) //
console.log(isPrimo(7)) //
console.log(isPrimo(8)) //
console.log(isPrimo(9)) //


// console.log(isPrimo(10))


let frutas = ['maça', 'pera', 'uva', 'manjericao', 'Jabuticaba', 'Mamão']
for (let i = 0; i < frutas.length; i++) {
    console.log(`${frutas[i]} indice: ${i}`);
}



