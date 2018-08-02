const priceChanger = () => {
	// let prices = document.getElementsByClassName('sx-price-whole');
	// let fractions = document.getElementsByClassName('sx-price-fractional');
	let $prices = $('.sx-price-whole');
	let $fractions = $('.sx-price-fractional');
	console.log('prices', $prices[0]);
	console.log('fractions', $fractions[0]);

	for (let i = 0; i < $prices.length; i++) {
		let randDollar = Math.floor(Math.random() * 2);
		let randCent = Math.floor(Math.random() * 89) + 10;
		$($prices[i]).text(randDollar);
		$($fractions[i]).text(randCent);
	}
};

const init = () => {
	priceChanger();
};

init();
