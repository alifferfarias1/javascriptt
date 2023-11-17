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