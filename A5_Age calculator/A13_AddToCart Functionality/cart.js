let productcart = document.getElementById('productcart');
let carts = localStorage.getItem('carts')
carts1 = JSON.parse(carts)
console.log(carts1[0])

let number = document.getElementById('number')
number.innerHTML += carts1.length

for (var i = 0; i < carts1.length; i++) {
    productcart.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${carts1[i].image}" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">${carts1[i].name}</h5>
        <p class="card-text">${carts1[i].price} Bitcoin</p>
        <a class="btn btn-primary" onClick='deleteItem(this)'>Delete</a>
    </div>
</div>
    `
}
console.log(carts1)

function deleteItem(e) {
    let item = e.parentNode.parentNode
    // console.log(item)
    item.remove()
    var index = carts1.indexOf(item);
    console.log(index)

    carts2=carts1.splice(index);
    localStorage.removeItem(index)
    localStorage.setItem('carts', JSON.stringify(carts1));


    //     localStorage.removeItem(e)
    //     e.parentNode.parentNode.remove()
}

