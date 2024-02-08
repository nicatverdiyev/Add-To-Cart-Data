let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHtml = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartspan = document.querySelector('.icon-cart span');


let listProduct = [];
let carts = [];

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
    let positionThisProductInCart = carts.findIndex((value) =>{})
    if (carts.length <= 0) {
        carts = [{
            product_id: product_id,
            quantity:1
        }]
    }
    console.log(carts);

}

const initApp = () => {
// ---DATA'DAN MELUMATIN GÖTÜRÜLMESİ---
    fetch('product.json')
    .then(response => response.json())
    .then(data => {
        listProduct = data;
       addDataToHTML();
    })

}
initApp();
