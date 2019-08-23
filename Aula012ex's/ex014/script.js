function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
   var hora = 10

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
    //Buenos días!
    //img.src = 'fotomanha.png'
    img.src = "https://abrilboaforma.files.wordpress.com/2016/10/10-pensamentos-corrida-manha_1.jpg"
    } else if (hora >= 12 && hora < 18) {
    //Buenas tardes!
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
    } else {
    //Buenas noches!
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
    }

}