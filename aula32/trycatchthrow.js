// tratamento de erros

// try{
//     console.log(naoExsisto);
// } catch(err){
//     console.log('Nao existe')
// }

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('X e Y precisam ser numeros')
    }

    return x + y
}
try{

    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch(err){
    console.log(err)
    console.log('Não foi possivel realizar sua operação.')
}