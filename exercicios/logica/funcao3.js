function retornaNums(num) {
    if (typeof num !== 'number'){
        return num
    }
    if ((num % 3 === 0) && (num % 5 === 0)) {
        return num + 'FizzBuzz'
    }
    else if (num % 3 === 0) {
        return num + 'Fizz'
    }
    else if (num % 5 === 0) {
        return num + 'Buzz'
    } return num
}


let resultado;
for (let i = 0; i < 100; i++) {
    resultado = retornaNums(i)
    console.log(resultado)
}