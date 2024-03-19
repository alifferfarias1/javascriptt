const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numeros) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei este numero:', numero);
        continue
    }

    if (numero === 7) {
        break
    }

    console.log(numero)
}
// se quisessemos exibir o numero sete seria so botar o console.log acima do if

console.log('###')


const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = 0;
while (index < numeros2.length) {
    let numero2 = numeros2[index];

    if (numero2 === 2) {
        console.log('Pulei este numero:', numero2);
        index++
        continue
    }

    if (numero2 === 7) {
        break
    }

    index++
    console.log(numero2)

}