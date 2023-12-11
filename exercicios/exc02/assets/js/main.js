const h1 = document.querySelector('.container h1');
const dataN = new Date('2019-10-07 22:52');

function getDayWeekText(diaSemana) {
    const weeks = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return weeks[diaSemana];
}

function getNameMonth(numeroMes) {
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return months[numeroMes];
}

function criaData(dataN) {
    const diaSemana = dataN.getDay(); // 1
    const numeroMes = dataN.getMonth(); // 9

    const nomeDia = getDayWeekText(diaSemana); // segunda
    const nomeMes = getNameMonth(numeroMes); // outubro

    return (
        `${nomeDia}, ${zeroEsquerda(dataN.getDate())} de ${nomeMes} ` +
        `de ${dataN.getFullYear()} ` +
        `${zeroEsquerda(dataN.getHours())}:${zeroEsquerda(dataN.getMinutes())}`
    );
}

h1.innerHTML = criaData(dataN);

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}