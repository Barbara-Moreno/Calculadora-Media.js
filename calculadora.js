const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite a primeira nota: ",(nota1) =>{
    rl.question("Digite a segunda nota: ",(nota2) => {
        rl.question("Digite a terceira nota: ",(nota3) => {
            nota1 = Number(nota1)
            nota2 = Number(nota2)
            nota3 = Number(nota3)

            let media = (nota1 + nota2 + nota3) /3

            console.log(media)
            rl.close()
        })
    })
})