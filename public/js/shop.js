function additem(item){
    let counter = document.getElementById('counter')
    let items = document.getElementById('items')
    // Agregar un item al texto
    items.innerText += `${item};`

    // Obtiene el nro que contiene y lo pasa a integer
    let suma = parseInt(counter.innerText) + 1
    // Reemplaza el valor dentro del p tag
    counter.innerText = suma
}

function closeNotification(){
    let notification = document.getElementById('user-notification')
    notification.hidden = true
}

function sendItems(){
    let items = document.getElementById('items')
    const url = `/beer-shop/ticket?items=${items.innerText}`
    window.location.assign(url)
}