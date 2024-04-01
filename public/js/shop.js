function additem(item){
    document.getElementById('shopping-cart').hidden = false
    let total = parseFloat(document.getElementById('shopping-cart-total').innerText)
    let details = document.getElementById('shopping-cart-details')
    console.log(item)
    // Creando elementos de la tabla
    let tr = document.createElement('tr')
    let tdId = document.createElement('td')
    tdId.setAttribute('name', 'id')
    tdId.innerText = item.id
    let tdProduct = document.createElement('td')
    tdProduct.setAttribute('name', 'name')
    tdProduct.innerText = item.name
    let tdPrice = document.createElement('td')
    tdPrice.setAttribute('name', 'price')
    tdPrice.innerText = item.price

    // Agregamos los elementos
    tr.appendChild(tdId)
    tr.appendChild(tdProduct)
    tr.appendChild(tdPrice)
    details.appendChild(tr)
    
    // Sumamos el monto al total
    total += item.price
    document.getElementById('shopping-cart-total').innerText = total
}