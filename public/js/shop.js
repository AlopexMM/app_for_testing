function additem(item){
    let total = parseFloat(document.getElementById('shopping-cart-total').innerText)
    let details = document.getElementById('shopping-cart-details')
    // Creando elementos de la tabla
    let tr = document.createElement('tr')
    let tdProduct = document.createElement('td')
    let tdPrice = document.createElement('td')
    let pProduct = document.createElement('p')
    let pPrice = document.createElement('p')
    let inputId = document.createElement('input')
    let inputProduct = document.createElement('input')
    let inputPrice = document.createElement('input')
    
    // Configuramos atributos de cada elemento p
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
    tdProduct.appendChild(pProduct)
    tdProduct.appendChild(inputProduct)
    tdPrice.appendChild(pPrice)
    tdPrice.appendChild(inputPrice)
    tr.appendChild(inputId)
    tr.appendChild(tdProduct)
    tr.appendChild(tdPrice)
    details.appendChild(tr)
    
    // Sumamos el monto al total
    total += item.price
    document.getElementById('shopping-cart-total').innerText = total
}