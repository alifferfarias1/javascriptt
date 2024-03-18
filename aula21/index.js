//Operação ternaria
// (condição) ? 'Valor para verdadeiro : 'Valor para falso';
const pontuacaoUsuario = 999;
                                           // se            // se nao   
const nivelUsuario = pontuacaoUsuario >= 1000  ? 'Usuario vip' : 'Usuario normal';
//Duas formas diferentes de fazer a checagem

// if e else comum
// if (pontuacaoUsuario >= 1000){ 
//     console.log('Usuario vip');
// } else {
//     console.log('Usuario normal');
// }
 

// valor padrao para variaveis
const corUsuario = null;
const corPadrao = corUsuario || '#ffffff';

console.log(nivelUsuario, corPadrao)
