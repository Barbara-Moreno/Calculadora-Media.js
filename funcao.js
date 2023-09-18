function mensagem (){
    console.log ("Olá")
}

mensagem ()

function mensagem2 (nome){
    return `Olá ${nome}`
}

console.log (mensagem2 ("Bárbara"))

let mensagem3 = (nome) => {
    return `Olá ${nome}`
}

console.log (mensagem3 ("Bárbara"))
