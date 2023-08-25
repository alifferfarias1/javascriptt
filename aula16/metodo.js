const pessoa = {
    nome: 'Aliffer',
    sobrenome: 'Farias', // podemos ainda ter uma funcao dentro de um objeto chamamos isso de metodo
    idade: 19,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi....`);

    }

};

pessoa.fala();