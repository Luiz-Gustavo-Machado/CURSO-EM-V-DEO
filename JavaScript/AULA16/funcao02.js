/*function soma(n1, n2) {
    return n1 + n2
}                            //o resultado daria 7

console.log(soma(2, 5))*/

/*function soma(n1, n2) {
    return n1 + n2
} 
                              // caso colocarmos apenas definirmos um nomero 
console.log(soma(2))*/        // um dos valores vai dar undefynit e o 
                              //  resultado   será NaN Not number

 
function soma(n1=0, n2=0) { 
    return n1 + n2
}                              //podemos resolver essa situação da falta 
                               // de um outro valor dessa seguinte forma
console.log(soma(2))           // colocando o recebe = 0 