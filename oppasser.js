function bereken_poten(giraffen, struisvogels, zebras) {
    let poten = giraffen * 4
    poten += struisvogels * 2
    poten += zebras * 4
    return poten
}

function krijg_hoeveelheid(text) {
    while (true) {
        let answer = parseInt(prompt(text))

        if (!isNaN(answer)) {
            return answer
        }
    }
}

let giraffen = krijg_hoeveelheid("Hoeveel giraffen zijn er?")
let struisvogels = krijg_hoeveelheid("Hoeveel struisvogels zijn er?")
let zebras = krijg_hoeveelheid("Hoeveel zebra's zijn er?")

console.log(bereken_poten(giraffen, struisvogels, zebras))