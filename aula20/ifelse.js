// Entre 0 e 11 bomdia
//  entre 12 e 17 boatarde
// entre 18 e 23 boa noite
const hora = 99

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde');

} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
} else {
    console.log('ola');
}