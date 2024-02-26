const data = new Date('1987-04-27 00:00');
console.log(data)

let diaSemana = data.getDay();
let diaSemanaText;

switch (diaSemana) {
    case 0:
        diaSemanaText = 'Domingo';
        break;
    case 1:
        diaSemanaText = 'Segunda';
        break;
    case 2:
        diaSemanaText = 'Terça';
        break;
    case 3:
        diaSemanaText = 'Quarta';
        break;
    case 4:
        diaSemanaText = 'Quinta';
        break;
    case 5:
        diaSemanaText = 'Sexta';
        break;
    case 6:
        diaSemanaText = 'Sabado';
        break;
    default:
        diaSemanaText = '';
}

console.log(diaSemanaText);










// if (diaSemana === 0) {
//     diaSemanaText = 'Domingo';
// }else if (diaSemana === 1){
//     diaSemanaText = 'Segunda';
// }
// else if (diaSemana === 2){
//     diaSemanaText = 'Terça';
// }
// else if (diaSemana === 3){
//     diaSemanaText = 'Quarta';
// }
// else if (diaSemana === 4){
//     diaSemanaText = 'Quinta';
// }
// else if (diaSemana === 5){
//     diaSemanaText = 'Sexta';
// }
// else if (diaSemana === 6){
//     diaSemanaText = 'Sabado';
// } else{
//     diaSemanaText = '';
// }
