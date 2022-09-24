const shop = document.querySelector("#shop");
const shopItemData = [
    {   
        id: 1,
        itemName: "Casual Shirts",
        itemDesc: "Pack of 3 casual shirts ",
        itemUrl: "img/shirt2.jpg",
        itemPrice: 23
    },
    {   
        id: 2,
        itemName: "Stripped Half Shirt",
        itemDesc: "Navy blue color stripped half shirt ",
        itemUrl: "img/shirt3.png",
        itemPrice: 62
    },
    {   
        id: 3,
        itemName: "Casual Partywear Shirt",
        itemDesc: "Pitch color shirt ",
        itemUrl: "img/shirt4.png",
        itemPrice: 85
    },
    {   
        id: 4,
        itemName: "Black Half Shirt",
        itemDesc: "Black coloured half shirt ",
        itemUrl: "img/shirt5.png",
        itemPrice: 55
    },
    {   
        id: 5,
        itemName: "T-Shirt Red",
        itemDesc: "Red polo t-shirt ",
        itemUrl: "img/tshirt6.png",
        itemPrice: 36
    },
    {   
        id: 6,
        itemName: "Casual Shirts",
        itemDesc: "Pack of 2 casual shirts ",
        itemUrl: "img/shirt7.png",
        itemPrice: 125
    },
    {   
        id: 7,
        itemName: "Blue Stripped Full Formal",
        itemDesc: "Navy blue coloured stripped check shirt ",
        itemUrl: "img/shirt8.png",
        itemPrice: 99
    },
    {   
        id: 8,
        itemName: "Men Casual Shirt Full",
        itemDesc: "Men checked bordered blue full shirt ",
        itemUrl: "img/shirt9.png",
        itemPrice: 69
    },
    {   
        id: 9,
        itemName: "Men Formal Shirt",
        itemDesc: "Sky color men formal shirt and slim fit ",
        itemUrl: "img/shirt10.png",
        itemPrice: 55
    },
    {   
        id: 10,
        itemName: "Partywear Men Blue Shirt",
        itemDesc: "Navy Blue coloured partywear slim fit shirt",
        itemUrl: "img/shirt11.png",
        itemPrice: 74
    },
    {   
        id: 11,
        itemName: "Men Black Suit",
        itemDesc: "Men Black Suit with great comfort ",
        itemUrl: "img/suit12.png",
        itemPrice: 189
    },
    {   
        id: 12,
        itemName: "Pack of 4 Tees",
        itemDesc: "Pack of 4 tees ",
        itemUrl: "img/shirts.jpg",
        itemPrice: 74
    }
]
const generateItem = () => {
    return shop.innerHTML = shopItemData.map(item => {
        let {id, itemUrl, itemName, itemDesc, itemPrice} = item;
        return `
            <div class="item" id="item-${id}">
                <img src="${itemUrl}" height="220" width="220" alt="">
                <div class="details" id="details">
                    <h3>${itemName}</h3>
                    <p>${itemDesc}</p>
                    <div class="price-quantity">
                        <h2>$${itemPrice}</h2>
                        <div class="buttons">
                            <i class="fa-solid fa-minus" onclick="decrement(${id})"></i>
                            <div class="quantity" id="price-id${id}">0</div>
                            <i class="fa-solid fa-plus" onclick="increment(${id})"></i>
                        </div>
                    </div>
                </div>
            </div>`
    }).join("");
}

generateItem();


let increment = (id) => {   
    console.log("increase")
    console.log(id);
}
let decrement = (id) => {
    console.log("decrease")
    console.log(id);
}
let update = () => {

}