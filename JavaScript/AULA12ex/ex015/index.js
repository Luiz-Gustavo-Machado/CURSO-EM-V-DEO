function verificar() {
   let data = new Date()
   let ano = data.getFullYear()
   let fAno = document.getElementById('txtano')
   let res = document.querySelector('div#res')
   if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    alert('[ERRO] Verifique os dados tente novamente!')
} else {
    alert
}
}