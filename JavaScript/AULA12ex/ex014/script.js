function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutios = data.getMinutes()
    
   // let hora = 9
    msg.innerHTML = `Agora são ${hora} horas e ${minutios} mínutos.`
    if (hora >= 0 && hora <= 12) {
        //BOM DIA!
        img.src = `manham.png`
        document.body.style.background = "#87CEFA"
    } else if (hora >= 12 && hora <= 17) {
        //BOA TARDE!
        img.src = `tarde.png`
        document.body.style.background = "#CD853F"
    } else {
        //BOA NOITE!
        img.src = `noite.png`
        document.body.style.background = "#2F4F4F"
    }
}