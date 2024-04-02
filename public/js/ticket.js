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
    if (cc === 'mastercard') {
        document.getElementById("amex").hidden = true
        document.getElementById("mastercard").hidden = false
        document.getElementById("visa").hidden = true
    }
    if (cc === 'visa') {
        document.getElementById("amex").hidden = true
        document.getElementById("mastercard").hidden = true
        document.getElementById("visa").hidden = false
    }
}
const creditCardNumber = document.getElementById('creditCardNumber')

creditCardNumber.addEventListener("input", (event) => {
    let card = event.target.value
    const amex = /^34|^37/g
    const mastercard =  /^2221|^2204|^51|^55/g
    const visa = /^4/
    if(amex.search(card)) showCreditCardLogo("amex")
    if(mastercard.search(card)) showCreditCardLogo("mastercard")
    if(visa.search(card)) showCreditCardLogo("visa")
})