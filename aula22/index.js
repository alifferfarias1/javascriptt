// const tresHoras = 60 * 60 * 3 * 1000;  tres horas em milesimos de segundo
// const umDia = 60 * 60 * 24 * 1000;  um dia em milesimos de segundo

// const data = new Date(0 + umDia + tresHoras); // funcao construtora 01/01/1970 timestamp unix

const data = new Date(2019, 3, 20, 15, 14, 27, 500); // os parametros estão em ordem 2019(ano) 03(abril) 20(dia 20) 15:14:27(hora minuto segundo) 500(milesimos 
console.log(data.toString());

// podemos omitir até o dia porém é necessario passar ano e mês se não a função date considera como milesimos apartir do timestamp 
function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`

}

// os meses vão de 0 a 11

const dataStr = new Date('2019-04-20 20:20:59');
console.log(dataStr.toString());

console.log('Dia', data.getDate());
console.log('Mes', zeroEsquerda(data.getMonth() + 1)); // mes começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // dia da semana 0 é domingo - 6 é sabado

console.log(Date.now())