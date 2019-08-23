function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if(fano.value.lenght == 0 || fano.value > ano) {
       window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else { 
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           genero = 'Masculino'
           if (idade >=0 && idade < 5) {
               //bebe
               img.setAttribute('src', 'fotobebehomem.png')
           }else if (idade >=5 && idade <12) {
               //criança
               img.setAttribute('src', 'fotocriancahomem.png')
           } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'fotojovemhomem.png')
           } else if (idade <50) {
               //adulto
               img.setAttribute('src', 'fotoadultohomem.png')
           } else {
               //idoso
               img.setAttribute('src', 'fotoidosohomem.png')
           } 
       
        } else if (fsex[1].checked) {
           genero = 'Feminino'
            if (idade >=0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'fotobebemulher.png')
            }else if (idade >=5 && idade <12) {
                //criança
                img.setAttribute('src', 'fotocriancamulher.png')
            } else if (idade <21) {
                 //jovem
                 img.setAttribute('src', 'fotojovemmulher.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'fotoadultamulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosamulher.png')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o genero ${genero} com a idade de ${idade} anos.`
        res.appendChild(img)
   }
}