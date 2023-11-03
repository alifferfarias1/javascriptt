function returnHour(data){
    if (data && !(data instanceof Date)){
        console.log('Não é uma data')
        throw new TypeError('Esperando uma instancia de data')
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour12: false

    });
}

// function intervalFunc(){
//     console.log(returnHour()) // sem  function anon fariamos assim
// }

const timer = setInterval(function (){
    console.log(returnHour())
}, 1000) // se precisarmos manter um horario atualizado podemos usar setInterval

// note que criamos a intervalfunc ela é considerada um procedimento pois apenas executa a funcao returnHour e a mostra no console, usamos a set interval fora da funcao e passamos ela como parametro, sem fechar os parenteses e após a virgula o intervalo em milesimos que ela deve executar a funcao que retorna a hora atual

setTimeout(function(){
    clearInterval(timer)
}, 5000)


setTimeout(function(){
    console.log('Olá mundo!')
}, 6000)