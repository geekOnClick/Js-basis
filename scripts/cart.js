'use strict';
const header = document.querySelector('.header__container');
const cartBlock = document.createElement('div');
const cartIcon = document.querySelector('.header__cart');
const addButtons = document.querySelectorAll('.productItem__addBtn');
let cartCount = +document.getElementById('count').lastChild.previousSibling.textContent;
let totalPriceCount = 0;
let productsInCart = []; 

cartBlock.classList.add("cartBlock");
let cartHeadings = document.createElement('div');
cartHeadings.classList.add('cartHeadings');
for(let i = 0; i < 4; i++){
    let heading = document.createElement('p');
    cartHeadings.append(heading);
    switch(i){
        case 0:
            heading.textContent = 'Название'
            break;
        case 1:
            heading.textContent = 'Количество'
            break;
        case 2:
            heading.textContent = 'Цена за шт.'
            break;
        case 3:
            heading.textContent = 'Итого:'
            break;
    }
}
let items = document.createElement('div');
items.classList.add('items');
let totalPrice = document.createElement('div');
totalPrice.classList.add('totalPrice');
totalPrice.insertAdjacentHTML('afterbegin', `<p> Итого товаров в корзине на сумму: <span id = 'totalCost'>${totalPriceCount}$ <span>`)
cartBlock.append(cartHeadings);
cartBlock.append(items);
cartBlock.append(totalPrice);
header.append(cartBlock);

cartIcon.addEventListener('click', function(){
    cartBlock.classList.toggle('active');
})

class AddNewItem {
    constructor(id, name, count, price, total){
        this.id = id;
        this.name = name;
        this.count = count;
        this.price = price;
        this.total = total;
    }

    getProductMarkup() {
            let template = 
                `<div id = '${this.id}' class="cartHeadings">
                <p>${this.name}</p>
                <p id='count'>${this.count}</p>
                <p>${this.price}.00$</p>
                <p id='total'>${this.total}</p>
                </div>`
                
            return template;    
    }
}

addButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        changeNumberOfItems();
        let mainDiv = event.target.parentElement.parentElement;
        let itemId = mainDiv.querySelector('.name').getAttribute('id'); 
        let itemName = mainDiv.querySelector('.name').textContent;
        let itemPrice = mainDiv.querySelector('.price').textContent;
        let item = new AddNewItem(itemId, itemName, 1, itemPrice, itemPrice);
        if(isItemInCart(item)){
        let currentProduct = {};
            productsInCart.forEach(element => {
                if(element.name.includes(item.name)){
                    currentProduct = element;
                    return;
                }
             });
        let productId = document.getElementById(`${currentProduct.id}`);
        let newCount = ++currentProduct.count;
        let totalPriceForItem = currentProduct.price * newCount;
        currentProduct.total = totalPriceForItem; 
            productId.children.count.textContent = `${newCount}`;
            productId.children.total.textContent= `${totalPriceForItem}.00$`;
        } 
        else {
        productsInCart.push(item);
        items.insertAdjacentHTML('afterbegin', item.getProductMarkup());
        }

        productsInCart.forEach(element => {
            totalPriceCount += Number(element.total);
        });
        document.getElementById('totalCost').textContent = `${totalPriceCount}$`
        totalPriceCount = 0;
    })
});

function changeNumberOfItems() {
    cartCount++;
        document.getElementById('count').lastChild.previousSibling.textContent = `${cartCount}`;
        document.getElementById('count').classList.add('addItem');
        setTimeout(function(){
            document.getElementById('count').classList.remove('addItem');
        }, 1000)
}

function isItemInCart(currentItem){
    let res = false;
    for (let element of productsInCart){
        if (element.name.includes(currentItem.name)){
            res = true;
            break;
        }
    }
    return res;
}