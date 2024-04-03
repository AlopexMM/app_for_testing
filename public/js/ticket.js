function deleteItem(item, price){
    let total = parseFloat(document.getElementById('total').innerText)
    total -= parseFloat(price)
    document.getElementById('total').innerText = total
    document.getElementById('totalPayment').value = total
    let i = item.parentNode.parentNode.rowIndex
    document.getElementById('ticket').deleteRow(i)
}

function showCreditCardLogo(cc) {
    if (cc === 'amex') {
        document.getElementById("amex").hidden = false
        document.getElementById("mastercard").hidden = true
        document.getElementById("visa").hidden = true
    }
    else if (cc === 'mastercard') {
        document.getElementById("amex").hidden = true
        document.getElementById("mastercard").hidden = false
        document.getElementById("visa").hidden = true
    }
    else if (cc === 'visa') {
        document.getElementById("amex").hidden = true
        document.getElementById("mastercard").hidden = true
        document.getElementById("visa").hidden = false
    }
    else {
        document.getElementById("amex").hidden = true
        document.getElementById("mastercard").hidden = true
        document.getElementById("visa").hidden = true
    }
}

function showCreditCardSuccessFailed(b) {
    if(b) {
        document.getElementById("check").hidden = false
        document.getElementById("xmark").hidden = true
    } else {
        document.getElementById("check").hidden = true
        document.getElementById("xmark").hidden = false
    }
}

/**
 * Verifica el codigo de la tarjeta de credito
 * @param {String} cc 
 * @returns {Boolean} 
 */
function verifyCreditCard(cc) {
    let even = 0
    let odd = 0
    let total = 0
    for(let i = 0; i < cc.length; i++) {
        if(i % 2 == 0) {
            let e = parseInt(cc[i]) * 2
            if (e.toString().length > 1) {
                let es = e.toString().split('')
                es.forEach( value => {
                    even += parseInt(value)
                })
            } else even += e
        } else odd += parseInt(cc[i])
    }
    total = even + odd
    if (total % 10 == 0) return true
    return false
}

const creditCardNumber = document.getElementById('creditCardNumber')

creditCardNumber.addEventListener("input", (event) => {
    let card = event.target.value
    const amex = /^3[0-9]+/g
    const mastercard =  /^5[0-9]+/g
    const visa = /^4[0-9]+/g
    if(card.match(amex)) showCreditCardLogo("amex")
    if(card.match(mastercard)) showCreditCardLogo("mastercard")
    if(card.match(visa)) showCreditCardLogo("visa")
    if(card.length == 16) showCreditCardSuccessFailed(verifyCreditCard(card))
    if(card.length < 16) showCreditCardSuccessFailed(false)
    if(card.length > 16) showCreditCardSuccessFailed(false)

})