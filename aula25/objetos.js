const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco:{
        rua: 'Av brasil',
        numero: 320
    }
};

const { nome = 'Não existe'} = pessoa // atribuição via desestruturação

const { endereco: {rua, numero}, endereco } = pessoa

console.log(nome, rua, numero)
console.log(endereco)


