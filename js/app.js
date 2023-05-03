let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'SAMURAI BEDSHEET',
        image: 'samurai1.JPG',
        price: 250
    },
    {
        id: 2,
        name: 'SASUKE BEDSHEEST',
        image: 'sasuke.JPG',
        price: 350
    },
    {
        id: 3,
        name: 'ZORO BEDSHEEST',
        image: 'zoro1.JPEG',
        price: 300
    },
    {
        id: 4,
        name: 'Demon Slayer BEDSHEEST ',
        image: 'demon1.JPG',
        price: 400
    },
    {
        id: 5,
        name: 'Demon Slayer BEDSHEEST White edition',
        image: 'demonslayer.JPG',
        price: 350
    },
    {
        id: 6,
        name: 'League of legends rune of tera edition BEDSHEET set',
        image: 'rune1.JPG',
        price: 250
    },
    {
        id: 7,
        name: 'Buko No Hero BEDSHEEST',
        image: 'buko1.JPEG',
        price: 250
    },
     {
        id: 8,
        name: 'naruto BEDSHEEST ',
        image: 'naruto.JPG',
        price: 250
    },
     {
        id: 9,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 300
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

$(document).ready(function() {  
    $('#cartModal').modal('show');
  });