const sessao = document.querySelector('.container')


const dataN = new Date('2019-10-07 22:52')

const dia = dataN.getDate();
const ano = dataN.getFullYear();
const hora = dataN.getHours();
const min = dataN.getMinutes();
const seg = zeroEsquerda(dataN.getSeconds());
const ms = dataN.getMilliseconds();

const diaSemana = dataN.getDay();
const mes = dataN.getMonth()
let diaSemanaText;
let mesReal;


switch (diaSemana) {
    case 0:
        diaSemanaText = 'Domingo';
        break
    case 1:
        diaSemanaText = 'Segunda-feira';
        break
    case 2:
        diaSemanaText = 'Terça-feira';
        break
    case 3:
        diaSemanaText = 'Quarta-feira';
        break
    case 4:
        diaSemanaText = 'Quinta-feira';
        break
    case 5:
        diaSemanaText = 'Sexta-feira';
        break
    case 6:
        diaSemanaText = 'Sabado';
        break
    default:
        diaSemanaText = '';
}
switch (mes) {
    case 0:
        mesReal = 'Janeiro';
        break
    case 1:
        mesReal = 'Fevereiro';
        break
    case 2:
        mesReal = 'Março';
        break
    case 3:
        mesReal = 'Abril';
        break
    case 4:
        mesReal = 'Maio';
        break
    case 5:
        mesReal = 'Junho';
        break
    case 6:
        mesReal = 'Julho';
        break
    case 7:
        mesReal = 'Agosto';
        break
    case 8:
        mesReal = 'Setembro';
        break
    case 9:
        mesReal = 'Outubro';
        break
    case 10:
        mesReal = 'Novembro';
        break
    case 11:
        mesReal = 'Dezembro';
        break
    default:
        mesReal = '';
}

sessao.innerHTML = `<h1>${diaSemanaText}, ${dia} de ${mesReal} de ${ano} ${hora}:${min}:${seg}</h1>`


function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}