// const frutas = ['pera', 'maça', 'uva'];

// for (let i = 0; i < frutas.length; i++) { for comum
//     console.log(frutas[i])}


const pessoa = {
    nome: 'Aliffer',
    sobrenome: 'Farias',
    idade: 20
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}

const nums = [1, 2, 3, 4, 5, 6]

for (let num in nums){
    console.log(num, nums[num])
}