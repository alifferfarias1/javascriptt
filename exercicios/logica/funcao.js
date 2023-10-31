function retornaMaior (a, b){
    if (a > b){
        return a
    }
    else if (b > a){
        return b
    }
    else{
        return "Os numeros tem o mesmo valor: " + a
    }
}
let maiorNum = retornaMaior(4, 8)

console.log(maiorNum)
// refatorando

function max (x, y){
    return x > y ? x : y;
}

const max2 = (x, y) => x > y ? x : y;