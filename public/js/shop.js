function additem(item){
    document.getElementById('shopping-cart').hidden = false
    let total = parseFloat(document.getElementById('shopping-cart-total').innerText)
    let details = document.getElementById('shopping-cart-details')
    // Creando elementos de la tabla
    let tr = document.createElement('tr')
    let tdId = document.createElement('td')
    let pId = document.createElement('p')
    let inputId = document.createElement('input')
    pId.innerText = item.id
    inputId.hidden = true
    inputId.setAttribute('name', 'id')
    inputId.setAttribute('type', 'number')
    inputId.value = item.id
    let tdProduct = document.createElement('td')
    tdProduct.innerText = item.name
    let tdPrice = document.createElement('td')
    tdPrice.innerText = item.price

    // Agregamos los elementos
    tdId.appendChild(pId)
    tdId.appendChild(inputId)
    tr.appendChild(tdId)
    tr.appendChild(tdProduct)
    tr.appendChild(tdPrice)
    details.appendChild(tr)
    
    // Sumamos el monto al total
    total += item.price
    document.getElementById('shopping-cart-total').innerText = total
}