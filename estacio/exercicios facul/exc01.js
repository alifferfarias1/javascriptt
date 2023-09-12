// let num1 = prompt('Insira um numero: ')
// let num2 = prompt('Insira outro numero: ')


// num1 = Number(num1)
// num2 = Number(num2)

// const vetor = [] // Crie um vetor vazio

// vetor.push(num1, num2) // Adicione os números ao vetor

// for(let numero in vetor){
// 	alert('Numeros contidos no seu array' + vetor[numero]);
// }


const vetor = []; // Crie um vetor vazio

while (true) {
    let entrada = prompt('Insira um número inteiro positivo: ');
	let entrada2 = prompt('Insira outro numero inteiro positivo: ');
    
    const numero = Number(entrada);
    const numero2 = Number(entrada2);

    if (Number.isInteger(numero) && numero > 0 && Number.isInteger(numero2) && numero2 > 0) {
        vetor.push(numero, numero2); // Adiciona o número ao vetor se for um inteiro positivo
		break

    } else {
        alert('Por favor, insira apenas números inteiros positivos válidos.');
		continue
    }
}

	if (vetor.length === 2) {
		const resultado = vetor[0] / vetor[1];
		alert('Resultado da divisão: ' + resultado);
	} else {
		alert('Não foi possível realizar a divisão porque os números não foram inseridos corretamente.');
	}