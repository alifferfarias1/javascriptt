var contador = 0;
do{
    console.log(contador);
    contador += 1;
} while (contador < 0);

// Execute novamente o código e perceba que apesar da condição nunca ter sido verdadeira, o bloco de instruções do laço foi executado uma vez. Essa é a diferença entre o laço “do/while” e o laço “while”.

var frutas = ['Laranja', 'Uva', 'Pera'];
      
/*Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for'*/
for(var i = 0; i < frutas.length; i++){
	console.log('Nome da Fruta contida no Array: ' + frutas[i]);
}
      
/*Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for/in'*/
for(var fruta in frutas){
	console.log('Nome da Fruta contida no Array: ' + frutas[fruta]);
}