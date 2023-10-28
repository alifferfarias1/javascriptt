const nome = 'Aliffer Farias';
const vetor = ['aliffer', 'sury', 'janaina'];


// for (let indice = 0; indice < nome.length; indice++){ // for classico
//     console.log(nome[indice])
// }

//  for (let i in nome){ // for in
//      console.log(nome[i])
//  }


 for (let valor of nome){ // nesse caso pega direto o valor em vez do indice como nos outros for
    console.log(valor)
 }

 console.log('###')

 vetor.forEach(function(valor, indice, array){ // retorna o valor e indice e ainda o array completo se quiser
    console.log(valor, indice, array)
 });


 // for classico geralmente com strings ou arrays
 // for in retorna o indice ou chave com strings arrays ou objetos
 // for of retorna o valor em si iteraveis arrays ou strings