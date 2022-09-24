const shop = document.querySelector("#shop");
const shopItemData = [
    {
        id: "dsg",
        itemName: "Casual Shirts",
        itemDesc: "Pack of 3 casual shirts ",
        itemUrl: "img/shirt2.jpg",
        itemPrice: 399
    },
    {
        id: "dfdf",
        itemName: "Stripped Half Shirt",
        itemDesc: "Navy blue color stripped half shirt ",
        itemUrl: "img/shirt3.png",
        itemPrice: 549
    },
    {
        id: "afdsf",
        itemName: "Casual Partywear Shirt",
        itemDesc: "Pitch color shirt ",
        itemUrl: "img/shirt4.png",
        itemPrice: 859
    },
    {
        id: "atge",
        itemName: "Black Half Shirt",
        itemDesc: "Black coloured half shirt ",
        itemUrl: "img/shirt5.png",
        itemPrice: 555
    },
    {
        id: "fadsf",
        itemName: "T-Shirt Red",
        itemDesc: "Red polo t-shirt ",
        itemUrl: "img/tshirt6.png",
        itemPrice: 369
    },
    {
        id: "bgae",
        itemName: "Casual Shirts",
        itemDesc: "Pack of 2 casual shirts ",
        itemUrl: "img/shirt7.png",
        itemPrice: 1250
    },
    {
        id: "agaee",
        itemName: "Blue Stripped Full Formal",
        itemDesc: "Navy blue coloured stripped check shirt ",
        itemUrl: "img/shirt8.png",
        itemPrice: 999
    },
    {
        id: "aghra",
        itemName: "Men Casual Shirt Full",
        itemDesc: "Men checked bordered blue full shirt ",
        itemUrl: "img/shirt9.png",
        itemPrice: 699
    },
    {
        id: "aega",
        itemName: "Men Formal Shirt",
        itemDesc: "Sky color men formal shirt and slim fit ",
        itemUrl: "img/shirt10.png",
        itemPrice: 559
    },
    {
        id: "agda",
        itemName: "Partywear Men Blue Shirt",
        itemDesc: "Navy Blue coloured partywear slim fit shirt",
        itemUrl: "img/shirt11.png",
        itemPrice: 748
    },
    {
        id: "awetg",
        itemName: "Men Black Suit",
        itemDesc: "Men Black Suit with great comfort ",
        itemUrl: "img/suit12.png",
        itemPrice: 1892
    },
    {
        id: "aegeg",
        itemName: "Pack of 4 Tees",
        itemDesc: "Pack of 4 tees ",
        itemUrl: "img/shirts.jpg",
        itemPrice: 749
    }
]
const basket = JSON.parse(localStorage.getItem("data")) || [];
const generateItem = () => {
    return shop.innerHTML = shopItemData.map(item => {
        let { id, itemUrl, itemName, itemDesc, itemPrice } = item;
        let search = basket.find(x => x.id === id) || [];

        return `
            <div class="item" id="item-${id}">
                <img src="${itemUrl}" height="220" width="220" alt="">
                <div class="details" id="details">
                    <h3>${itemName}</h3>
                    <p>${itemDesc}</p>
                    <div class="price-quantity">
                        <h2 id="item-price"><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i> ${itemPrice}</h2>
                        <div class="buttons">
                            <i class="fa-solid fa-minus" onclick="decrement(${id})"></i>
                            <div class="quantity" id="${id}">${search.item === undefined ? 0 : search.item}</div>
                            <i class="fa-solid fa-plus" onclick="increment(${id})"></i>
                        </div>
                    </div>
                </div>
            </div>`
    }).join("");
}

generateItem();


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
    localStorage.setItem("data", JSON.stringify(basket));
    update(selectedItem.id);
}
const decrement = (id) => {
    let selectedItem = id;
    let search = basket.find(x => x.id === selectedItem.id);

    if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    localStorage.setItem("data", JSON.stringify(basket))
    update(selectedItem.id);
}
const update = (id) => {
    let search = basket.find(x => x.id === id);
    document.querySelector(`#${id}`).innerText = search.item;
    calculation();
}

const calculation = () => {
    let sum = 0;
    let basketItem = basket.forEach(i => {
        return sum += i.item;
    })
    document.querySelector(".cartAmount").innerText = sum;
}
