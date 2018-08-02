
function priceChanger() {

    let prices = document.getElementsByClassName('sx-price-whole');
    let fractions = document.getElementsByClassName('sx-price-fractional')

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerHTML = '0';
        fractions[i].innerHTML = '00'
    }
};