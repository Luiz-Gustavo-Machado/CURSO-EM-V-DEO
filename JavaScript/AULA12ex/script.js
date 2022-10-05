

function carregar() {
    let msg = window.document.querySelector('div#msg')
    let img = window.document.querySelector('div#imagem')
    let data = new Date()
   // let hora = data.getHours()
    var hora = 21
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = `manham.png`
    } else if (hora >= 12 && <= 18) {
        //BOA TARDE!
        img.src = `tarde.png`
    } else {
        //BOA NOITE!
        img.src = `noite.png`
    }
}