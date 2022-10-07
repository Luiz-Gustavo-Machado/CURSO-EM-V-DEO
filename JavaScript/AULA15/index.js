/*let num = [5, 7 , 2, 9, 3]

num.push(1) //acrescentou o numero na ultima posição
num.sort() // colocou os numero em ordem 
console.log(num) 
console.log(`O vetor tem ${num.length} posiçÔes`)
console.log(`Ò primeiro valor do vetor é ${num[0]}`)*/


// outras que é muito comum de se fazer com o vetor é mostrar ele na tela sem a formatação padrão pq geralmente ele mostra aquela formatação padrão bem bagunçada com colchete, se você quiser mostrar do seu jeitinho da maneira que você preferir tem o jeito

/*let valores = [5, 7 , 2, 9, 3]

valores.sort()*/
/*for(let pos=0; pos < valores.length; pos++) {
    conso4dxxle.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

// podemos simplificar a variavel no for 

/*for(let pos in valores) {
    console.log(valores[pos])
}*/

let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posiçÔes`)
console.log(`Ò primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}