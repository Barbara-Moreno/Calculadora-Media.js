const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question ("Defina o simbilo aritmetico desejado: ", (operador) =>{
    rl.question ("Digite o primeiro numero para a operação: ", (numero1) =>{
        rl.question ("Digite o primeiro numero para a operação: ", (numero2) =>{
           numero1 = Number(numero1)
           numero2 = Number(numero2)

           switch (operador) {
            case '+': 
            console.log (numero1 + numero2);
                break

            case '-':
                console.log (numero1 - numero2);
                break

            case '*':
                console.log (numero1 * numero2);
                break

            case '/':
                console.log (`${numero1 / numero2} ${numero1 % numero2}`);
                break

           }

rl.close()
        })
    })
})