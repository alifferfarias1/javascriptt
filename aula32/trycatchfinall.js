try {
    // executada quando nao a erros
} catch (e){
    // executado quando a erros
} finally {
    // executado sempre
}
try {
    console.log('Manipulei o arquivo')
    console.log('Fechei o arquivo')
} catch (e){
    console.log('Deu erro')

} finally {
    console.log('Eu sempre sou executado')

}

function returnHour(data){
    if (data && !(data instanceof Date)){
        console.log('Não é uma instancia de data')
        throw new TypeError('Esperando uma instancia de data')
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{

    });
}


try{

const data = new Date(0)
hora = returnHour(3)
console.log(hora)

} catch(e){
    //tratar erro
    console.log('Esperava-se uma data')
} finally{
    console.log('Tenha um bom dia!')

}