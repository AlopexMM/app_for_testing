/**
 * 
 * @param {String} number 
 * @returns String number de 15 numeros
 */
async function  generateNumber(number) {
    if (number.length == 15) return number

    const newNumber = Math.floor(Math.random() * 9)
    return generateNumber(`${number}${newNumber}`)
}

/**
 * Recibe el tipo de tarjeta:
 * amex - para american express
 * mastercar - para mastercard
 * visa - para visa
 * en caso de entregar una tarjeta que no se convalida en las opciones devuelve -1
 * @param {String} cardType  
 * @returns creditcard
 */
export async function generateCard(cardType) {
    let creditcard = ""
    if (cardType == "amex") creditcard = await generateNumber('3')
    if (cardType == "visa") creditcard = await generateNumber('4')
    if (cardType == "mastercard") creditcard = await generateNumber('5')
    if (creditcard === "") return -1

    const cardSplit = creditcard.split('')
    
    // Comprobamos la cuenta y agregamos el checksum para que de el modulo de 10
    let even = 0
    let odd = 0
    let total = 0
    for(let i = 0; i < cardSplit.length; i++) {
        if(i % 2 == 0) {
            let e = parseInt(cardSplit[i]) * 2
            if (e.toString().length > 1) {
                let es = e.toString().split('')
                es.forEach( value => {
                    even += parseInt(value)
                })
            } else even += e
        } else odd += parseInt(cardSplit[i])
    }
    total = even + odd
    if (total % 10 == 0) return `${creditcard}0`
    let numberToAdd = 0
    while(true) {
        total += 1
        numberToAdd += 1
        if (total % 10 == 0) return `${creditcard}${numberToAdd}`
    }
}