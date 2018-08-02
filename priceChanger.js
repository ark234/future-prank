
function priceChanger() {

    // These classes work for Amazon
    let prices = document.getElementsByClassName('sx-price-whole');
    let fractions = document.getElementsByClassName('sx-price-fractional')
    let big

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerHTML = '0';
    }
};



