function additem(item){
    document.getElementById('shopping-cart').hidden = false
    let total = parseFloat(document.getElementById('shopping-cart-total').innerText)
    let details = document.getElementById('shopping-cart-details')
    // Creando elementos de la tabla
    let tr = document.createElement('tr')
    let tdId = document.createElement('td')
    let tdProduct = document.createElement('td')
    let tdPrice = document.createElement('td')
    let pId = document.createElement('p')
    let pProduct = document.createElement('p')
    let pPrice = document.createElement('p')
    let inputId = document.createElement('input')
    let inputProduct = document.createElement('input')
    let inputPrice = document.createElement('input')
    
    // Configuramos atributos de cada elemento p
    pId.innerText = item.id
    pProduct.innerText = item.name
    pPrice.innerText = item.price

    //Configuramos atributos de cada elemento input
    inputId.hidden = true
    inputId.setAttribute('name', 'id')
    inputId.setAttribute('type', 'number')
    inputId.value = item.id
    inputProduct.hidden = true
    inputProduct.setAttribute('name', 'product')
    inputProduct.setAttribute('type', 'text')
    inputProduct.value = item.name
    inputPrice.hidden = true
    inputPrice.setAttribute('name', 'price')
    inputPrice.setAttribute('type', 'text')
    inputPrice.value = item.price
    
    // Configuramos los atributos de cada elemento td
    tdProduct.classList.add('is-size-6')

    // Agregamos los elementos
    tdId.appendChild(pId)
    tdId.appendChild(inputId)
    tdProduct.appendChild(pProduct)
    tdProduct.appendChild(inputProduct)
    tdPrice.appendChild(pPrice)
    tdPrice.appendChild(inputPrice)
    tr.appendChild(tdId)
    tr.appendChild(tdProduct)
    tr.appendChild(tdPrice)
    details.appendChild(tr)
    
    // Sumamos el monto al total
    total += item.price
    document.getElementById('shopping-cart-total').innerText = total
}