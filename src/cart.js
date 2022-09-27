const cartLabel = document.querySelector("#label");
const shoppingCart = document.querySelector("#shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

const calculation = () => {
    let cartIcon = document.querySelector(".cartAmount");
    cartIcon.innerText = basket.map(x => x.item).reduce((x, y) => x+y, 0);
}
calculation();

const generateCartItems = () => {
    if(basket.length !== 0){
       return (shoppingCart.innerHTML = basket.map(x => {
            let {id, item} = x;
            const search = shopItemData.find(y => y.id === id) || [];
            let {itemName, itemUrl, itemPrice} = search;
            return `
                <div class="cart-item">
                    <img width="100" src="${itemUrl}" />
                    <div class="details">
                        <div class="title-price-x">
                            <h4 class="title-price">
                                <p>${itemName}</p>
                                <p class="item-price"><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>${itemPrice}</p>
                            </h4>
                            <i class="fa-solid fa-xmark" onclick="removeItem(${id})"></i>
                        </div>

                        <div class="buttons">
                            <i class="fa-solid fa-minus" onclick="decrement(${id})"></i>
                            <div class="quantity" id="${id}">${item}</div>
                            <i class="fa-solid fa-plus" onclick="increment(${id})"></i>
                        </div>

                        <h3 class="total-price-item"><i class="fa-sharp fa-solid fa-indian-rupee-sign item-price-icon"></i>${search.itemPrice*item}</h3>
                    </div>
                </div>
            `
       }).join(""));

    }else{
        shoppingCart.innerHTML = "";
        cartLabel.innerHTML =  `
        <h1>Cart is empty</h1>
        <a href="index.html">
            <button>Back to Home</button>
        </a>
        `;
    }
}

generateCartItems();

const increment = (id) => {
    let selectedItem = id;
    let search = basket.find(x => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1
        })
    } else {
        search.item += 1;
    }
    update(selectedItem.id);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
}
const decrement = (id) => {
    let selectedItem = id;
    let search = basket.find(x => x.id === selectedItem.id);

    if (search === undefined) return ;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x)=> x.item !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
}
const update = (id) => {
    let search = basket.find(x => x.id === id);
    document.querySelector(`#${id}`).innerText = search.item;
    calculation();
    totalBill();
}

const removeItem = (selected) => {
    let selectedItemId = selected.id;
    basket = basket.filter(x => x.id !== selectedItemId);
    generateCartItems();
    totalBill();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
}
const clearCart = () => {
    basket = [];
    generateCartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
}

const totalBill = () => {
    if(basket.length !== 0){
        let amount = basket.map(x => {
            let {id, item} = x;
            let search = shopItemData.find(si => si.id === id) || [];
            return item * search.itemPrice;
        }).reduce((x, y) => x+y , 0);
        return (cartLabel.innerHTML = `
        <h1>Total Bill: RS <span id="value">${amount}</span></h1>
        <div class="buttons">
            <button id="checkout" class="checkout">Checkout</button>
            <button id="clear-cart" class="clear-cart" onclick="clearCart()">Clear Cart</button>
        </div>
        `);
    }else return;
}

totalBill();

