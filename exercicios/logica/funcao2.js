function ePaisagem(width, heigth){
    if (width > heigth){
        return (width > heigth)  // funcao que retorna true se a imagem estiver no modo paisem e false se nao
    }
    return(heigth < width)
}
console.log(ePaisagem(60, 50))

console.log("++++++++++++")
// refatorando

const ePaisagem2 = (largura, altura) => largura > altura;


console.log(ePaisagem2(200, 50))