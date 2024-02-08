let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHtml = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartspan = document.querySelector('.icon-cart span');


let product = [];
let cart = [];

// ----Sebet iconunun click'i zamanı baş verecek hadise---BAŞLANĞIC---
iconCart.addEventListener("click", () => {
    body.classList.toggle('showCart');
});
// ----Sebet iconunun click'i zamanı baş verecek hadise---SON---


// ----CLOSE BUTTON'UN click'i zamanı baş verecek hadise---BAŞLANĞIC---
closeCart.addEventListener("click", () => {
    body.classList.toggle('showCart');
});
// ----CLOSE BUTTON'UN click'i zamanı baş verecek hadise---SON---


const addDataToHTML = () =>{
    listProductHtml.innerHTML = "";
    if(listProduct.length > 0){

        listProduct.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
            <img
            src="${product.img}"
            alt=""
          />
          <h2>${product.name}</h2>
          <div class="price">$${product.price}</div>
          <button class="addCart">Add To Cart</button>`;
          listProductHtml.appendChild(newProduct)
        })


    }

}

listProductHtml.addEventListener("click", (event) =>{
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id);
    }
});

const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () =>{
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if (cart.length > 0) {
        cart.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            let positionProduct = listProduct.findIndex((value => value.id == cart.product_id));
            let info = listProduct[positionProduct];
            newCart.innerHTML = `
            
        <div class="item">
        <div class="image">
          <img
            src="${info.img}"
            alt=""
          />
        </div>
        <div class="name">${info.name}</div>
        <div class="totalPrice">${info.price * cart.quantity}</div>
        <div class="quantity">
          <span class="minus"> - </span>
          <span> ${cart.quantity} </span>
          <span class="plus"> + </span>
        </div>
      </div>
            `;
            listCartHTML.appendChild(newCart);
        });

    }
    iconCartspan.innerText = totalQuantity;
}

const initApp = () => {
// ---DATA'DAN MELUMATIN GÖTÜRÜLMESİ---
    fetch('product.json')
    .then(response => response.json())
    .then(data => {
        listProduct = data;
       addDataToHTML();

    //    ---localStorage DA SAXLANMA---
    if(localStorage.getItem('cart')){
        cart = localStorage.getItem('cart');
    }
    })

}
initApp();
