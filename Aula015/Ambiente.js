let num = [5,8,2,3,4,5]
num.push(1)
num.sort()


console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
console.log(`O valor 8 esta na posição ${pos}`)
}