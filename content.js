const priceChanger = () => {
	// let prices = document.getElementsByClassName('sx-price-whole');
	// let fractions = document.getElementsByClassName('sx-price-fractional');
	let $prices = $('.sx-price-whole');
	let $fractions = $('.sx-price-fractional');
	let $googleFront = $('.O8U6h')
	let $googleDeep = $('.e10twf T4OwTb')
	let $amazon = $('#priceblock_ourprice')
	console.log('prices', $prices[0]);
	console.log('fractions', $fractions[0]);

	for (let i = 0; i < $prices.length; i++) {
		let randDollar = Math.floor(Math.random() * 2);
		let randCent = Math.floor(Math.random() * 89) + 10;
		$($prices[i]).text(randDollar);
		$($fractions[i]).text(randCent);
	}

	for (let i = 0; i < $googleFront.length; i++) {
		$($amazon).text(randDollar)
	}

	for (let i = 0; i< googleDeep.length; i++) {
		$($googleDeep).text(randDollar)
	}

};

const init = () => {
	priceChanger();
};

init();
