function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;

}


function formataData(data) {
    const dia = zeroEsquerda(data.getDate());  // dia 
    const mes = zeroEsquerda(data.getMonth() + 1) ; // mes de 0 a 11
    const ano = zeroEsquerda(data.getFullYear()); // ano
    const hora = zeroEsquerda(data.getHours()); // hora 
    const min = zeroEsquerda(data.getMinutes()); // minuto
    const seg = zeroEsquerda(data.getSeconds()); // seg

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg} `
}

const data = new Date('2019-04-07 20:20:59');
console.log(data)

const dataBrasil = formataData(data);
console.log(dataBrasil)
