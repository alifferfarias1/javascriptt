// While e do While

const nome = 'Luiz'

let controle = 0;

while (controle <= 10) { // semelhante ao enquanto faça do visualg checa a condição antes de entrar no loop
    console.log(controle)
    controle++
}


function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1
const max = 50


let rand;

while (rand !== 10){
    rand = random(min, max);
    console.log(rand)
}

// 

console.log('=========================================================')

do {
    rand = random(min, max); //executa pelo menos uma vez, semelhante ao repita enquanto do Visualg
    console.log(rand)
} while (rand !== 10);
