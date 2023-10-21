const h1 = document.querySelector('.container h1');
const dataN = new Date('2019-10-07 22:52');

const diaSemana = dataN.getDay();
const numeroMes = dataN.getMonth();

function getDayWeekText(diaSemana) {
    const weeks = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return weeks[diaSemana];
}

function getNameMonth(numeroMes) {
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return months[numeroMes];
}

function criaData(dataN) {
    const diaSemana = dataN.getDay();
    const numeroMes = dataN.getMonth();

    const nomeDia = getDayWeekText(diaSemana);
    const nomeMes = getNameMonth(numeroMes);

    return (
        `${nomeDia}, ${dataN.getDate()} de ${nomeMes} ` +
        `de ${dataN.getFullYear()} ` +
        `${zeroEsquerda(dataN.getHours())}:${zeroEsquerda(dataN.getMinutes())}`
    );
}

h1.innerHTML = criaData(dataN);

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}