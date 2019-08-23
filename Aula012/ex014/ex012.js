/*
* Saudacoes a implementar
* Bom dia! -> Apos a meia noite ate 8:59:59 da manha
* Quase na hora de comer! -> a partir das 9:00:00 da manha ate 12:30:00
* Comer! -> Apos 12:30:00 ate 13:30:00
* Novamente com fome... -> Para todos os outros casos 
*/
var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundo = agora.getSeconds()

console.log(`Agora são exatamente ${hora} horas, ${minuto} minutos e ${segundo} segundos.`)
if (hora  > 0 && hora <= 8){
console.log('Bom dia!')
} else if (hora > 9 && hora <= 12) {
    console.log('Quase na hora de comer!')
} else if (hora> 12 && hora <= 13) {
    console.log('Comer!')
} else {
    console.log('Novamente com fome...')
}
