const shop = document.querySelector("#shop");
let basket = JSON.parse(localStorage.getItem("data")) || [];
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
    update(selectedItem.id);
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
    localStorage.setItem("data", JSON.stringify(basket));
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
calculation();
