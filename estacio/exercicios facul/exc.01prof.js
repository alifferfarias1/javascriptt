var frutas = ['Laranja', 'Uva', 'Limão'];


var alunos = [];  //array vazio
var alunos = ['Alex', 'Anna', 'João']; // array de strings
var notas = [10.0, 9.5, 9.5]; //array de números decimais
var mistura = ['Um', 2, 3, 'Quatro']; //array de diversos tipos de dados


 var alunos = new Array();
 var alunos = new Array('Alex', 'Anna', 'João');
 
 var alunos = ['Alex', 'Anna', 'João']; // array de strings
 alert(alunos[0]); //exibirá “Alex” na caixa de diálogo
 
 
 alunos.push('Helena');
 
 
 alunos.push('Helena', 'Maria');
 
 
 frutas[frutas.length] = 'Maria';
 
 
 var alunos = ['Alex', 'Anna', 'João'];
 alunos.splice(3,0,'Helena');
 alert(alunos); //imprimirá 'Alex', 'Anna', 'João', 'Helena'
 
 
 var alunos = ['Alex', 'Anna', 'João'];
 alunos.splice(1,1,'Helena');
 alert(alunos); //imprimirá 'Alex, 'Helena', 'João'
 
 delete frutas[0];