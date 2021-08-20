//update product price
function updatePrice(itemName, itemValue) {
    const configurationItemPrice = document.getElementById(itemName + '-cost');
    let addPrice = 0;
    // check item and value
    if (itemName == "memory" && itemValue == '16GB') {
        addPrice = 180;
    }
    else if(itemName == "storage" && itemValue=="512GB"){
        addPrice = 100;
    }
    else if(itemName == "storage" && itemValue=="1TB"){
        addPrice = 180;
    }
    else if(itemName == "delivery" && itemValue=="fast-delivery"){
        addPrice = 20;
    }
    else {
        addPrice = 0;
    }
    // update UI after add price
    configurationItemPrice.innerText = addPrice;
    // call total calculation function
    cartTotal();
    
}
//calculation total product price
function cartTotal() {
    // get data from UI
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryPrice = parseInt(document.getElementById('memory-cost').innerText);
    const storagePrice = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryPrice = parseInt(document.getElementById('delivery-cost').innerText);
    const cartTotalPriceText = document.getElementById('total-price');
    // calculate all product price
    const total = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    // update UI after add price
    cartTotalPriceText.innerText = total;
    // call total final calculation function
    finalTotal(total);
}

// enter promo code and check it same as stevekaku
function promoCode() {
    let code = document.getElementById('promo-code');
    const cartTotalPrice = parseInt(document.getElementById('total-price').innerText);
    // check input equal to stevekaku
    if (code.value == 'stevekaku') {
        const off20 = (cartTotalPrice / 100)*20;
        const total = cartTotalPrice - off20;
        finalTotal(total);
        document.getElementById('invalid-warring').style.display = 'none';
    }
    else {
        // if type wrong promo code
        document.getElementById('invalid-warring').style.display = 'block';
    }
    // set input field as empty
    code.value = '';
}

//footer total price with 20% off
function finalTotal(total) {
    const cartTotalPriceText = document.getElementById('final-total');
    cartTotalPriceText.innerText = total;
}