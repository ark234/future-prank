const priceChanger = () => {
	let prices = document.getElementsByClassName('sx-price-whole');
	let fractions = document.getElementsByClassName('sx-price-fractional');

	for (let i = 0; i < prices.length; i++) {
		let randDollar = Math.floor(Math.random() * 2);
		let randCent = Math.floor(Math.random() * 89) + 10;
		prices[i].innerHTML = randDollar;
		fractions[i].innerHTML = randCent;
	}
};

const init = () => {
	priceChanger();
};

init();
