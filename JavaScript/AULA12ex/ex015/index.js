function verificar() {
   let data = new Date()
   let ano = data.getFullYear()
   let fAno = document.getElementById('txtano')
   let res = document.querySelector('div#res')
   if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    alert('[ERRO] Verifique os dados tente novamente!')
} else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let gênero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            // Criança
        } else if (idade < 21) {
            //Jovem
        } else if (idade < 50) {
             //adulto
        } else {
            //idoso
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade < 10) {
            // Criança
        } else if (idade < 21) {
            //Jovem
        } else if (idade < 50) {
             //adulto
        } else {
            //idoso
        }
    }
    res.getElementsByClassName.textAlin = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
}   
}