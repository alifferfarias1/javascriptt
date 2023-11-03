const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){
    // sempre queremos o codigo que nao queremos executar abaixo da palavra continue
    if (numero === 2 || numero === 5){
        console.log('Pulei este numero:', numero);
        continue
    }
    if (numero === 7){
        console.log('Pulei este numero:', numero)
        continue;
    }
    console.log(numero)
}