let idade = 11
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade >= 16 && idade < 18) // essa linha não seria necessarios pois já esta explicito se a idade não é maior que 16 obviamente ele é maior ou igual
    console.log('Voto opcional')
} 


let idade = 22
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18) {
    console.log('Voto Opcional')
} else {
    console.log('Voto Obrigatório')
}

//No Brasil, acima de 67 anos o voto volta a ser opcional

let idade = 16
    console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota!')
} else if (idade < 18) {
    console.log('O Voto Opcional!')
} else {
    console.log('O Voto Obrigatório!')
}