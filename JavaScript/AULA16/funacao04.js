function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {  
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// vou ter o meu contador começanmdo em n e quanquanto o contador/c for maior/> do que 1 o contador perde 1/ c--


// calculando o fatorial de um numero 
// 5! = 5 x 4 x 3 x 2 x 1

//>>>>> podemos criar uma função recursiva aquivo 05
