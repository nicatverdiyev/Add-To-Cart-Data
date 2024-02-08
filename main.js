// let iconCart = document.querySelector('.icon-cart');
// let closeCart = document.querySelector('.close');
// let body = document.querySelector('body');
// let listProductHtml = document.querySelector('.listProduct');
// let listCartHTML = document.querySelector('.listCart');
// let iconCartspan = document.querySelector('.icon-cart span');


// let product = [];
// let cart = [];

// // ----Sebet iconunun click'i zamanı baş verecek hadise---BAŞLANĞIC---
// iconCart.addEventListener("click", () => {
//     body.classList.toggle('showCart');
// });
// // ----Sebet iconunun click'i zamanı baş verecek hadise---SON---


// // ----CLOSE BUTTON'UN click'i zamanı baş verecek hadise---BAŞLANĞIC---
// closeCart.addEventListener("click", () => {
//     body.classList.toggle('showCart');
// });
// // ----CLOSE BUTTON'UN click'i zamanı baş verecek hadise---SON---


// const addDataToHTML = () =>{
//     listProductHtml.innerHTML = "";
//     if(listProduct.length > 0){

//         listProduct.forEach(product => {
//             let newProduct = document.createElement('div');
//             newProduct.classList.add('item');
//             newProduct.dataset.id = product.id;
//             newProduct.innerHTML = `
//             <img
//             src="${product.img}"
//             alt=""
//           />
//           <h2>${product.name}</h2>
//           <div class="price">$${product.price}</div>
//           <button class="addCart">Add To Cart</button>`;
//           listProductHtml.appendChild(newProduct)
//         })


//     }

// }

// listProductHtml.addEventListener("click", (event) =>{
//     let positionClick = event.target;
//     if (positionClick.classList.contains('addCart')) {
//         let product_id = positionClick.parentElement.dataset.id;
//         addToCart(product_id);
//     }
// });

// const addToCart = (product_id) => {
//     let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
//     if(cart.length <= 0){
//         cart = [{
//             product_id: product_id,
//             quantity: 1
//         }];
//     }else if(positionThisProductInCart < 0){
//         cart.push({
//             product_id: product_id,
//             quantity: 1
//         });
//     }else{
//         cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
//     }
//     addCartToHTML();
//     addCartToMemory();
// }
// const addCartToMemory = () =>{
//     localStorage.setItem('cart', JSON.stringify(cart));
// }
// const addCartToHTML = () => {
//     listCartHTML.innerHTML = '';
//     let totalQuantity = 0;
//     if (cart.length > 0) {
//         cart.forEach(cart => {
//             totalQuantity = totalQuantity + cart.quantity;
//             let newCart = document.createElement('div');
//             newCart.classList.add('item');
//             newCart.dataset.id = cart.product_id;
//             let positionProduct = listProduct.findIndex((value => value.id == cart.product_id));
//             let info = listProduct[positionProduct];
//             newCart.innerHTML = `
            
//         <div class="item">
//         <div class="image">
//           <img
//             src="${info.img}"
//             alt=""
//           />
//         </div>
//         <div class="name">${info.name}</div>
//         <div class="totalPrice">${info.price * cart.quantity}</div>
//         <div class="quantity">
//           <span class="minus"> - </span>
//           <span> ${cart.quantity} </span>
//           <span class="plus"> + </span>
//         </div>
//       </div>
//             `;
//             listCartHTML.appendChild(newCart);
//         });

//     }
//     iconCartspan.innerText = totalQuantity;
// }
// listCartHTML.addEventListener('click', (event) => {
//     let positionClick = event.target;
//     if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
//         let product_id = positionClick.parentElement.parentElement.dataset.id;
//         let type = 'minus';
//         if(positionClick.classList.contains('plus')){
//             type = 'plus';
//         }
//         changeQuantityCart(product_id, type);
//     }
// })
// const changeQuantityCart = (product_id, type) => {
//     let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
//     if(positionItemInCart >= 0){
//         let info = cart[positionItemInCart];
//         switch (type) {
//             case 'plus':
//                 cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
//                 break;
        
//             default:
//                 let valueChange = cart[positionItemInCart].quantity - 1;
//                 if (valueChange > 0) {
//                     cart[positionItemInCart].quantity = valueChange;
//                 }else{
//                     cart.splice(positionItemInCart, 1);
//                 }
//                 break;
//         }
//     }
//     addCartToMemory();
//     addCartToHTML();
// }

// const initApp = () => {
// // ---DATA'DAN MELUMATIN GÖTÜRÜLMESİ---
//     fetch('product.json')
//     .then(response => response.json())
//     .then(data => {
//         listProduct = data;
//        addDataToHTML();

//     //    ---localStorage DA SAXLANMA---
//     if(localStorage.getItem('cart')){
//         cart = JSON.parse(localStorage.getItem('cart'));
//         addCartToHTML();
//     }
//     });

// }
// initApp();


let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

    const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        if(products.length > 0) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<img
                src="${product.img}"alt=""/>
              <h2>${product.name}</h2>
              <div class="price">$${product.price}</div>
              <button class="addCart">ADD TO CART</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    }
    listProductHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if(positionClick.classList.contains('addCart')){
            let id_product = positionClick.parentElement.dataset.id;
            addToCart(id_product);
        }
    })
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
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            
         <div class="image">
           <img
             src="${info.img}"
             alt=""
           />
         </div>
         <div class="name">${info.name}</div>
         <div class="totalPrice">${info.price * item.quantity}</div>
         <div class="quantity">
          <span class="minus"> - </span>
          <span> ${item.quantity} </span>
           <span class="plus"> + </span>
         </div>
       
            `;
        })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp = () => {
    // get data product
    fetch('product.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();

        // get data cart from memory
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}
initApp();

