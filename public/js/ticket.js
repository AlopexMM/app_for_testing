function deleteItem(item, price){
    let total = parseFloat(document.getElementById('total').innerText)
    total -= parseFloat(price)
    document.getElementById('total').innerText = total
    let i = item.parentNode.parentNode.rowIndex
    document.getElementById('ticket').deleteRow(i)
}