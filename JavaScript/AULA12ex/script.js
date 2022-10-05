function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
   // let hora = data.getHours()
    let hora = 8
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora <= 12) {
        //BOM DIA!
        img.src = `manham.png`
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = `tarde.png`
    } else {
        //BOA NOITE!
        img.src = `noite.png`
    }
}