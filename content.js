const priceChanger = () => {

	//These variables target specific classes so that we can manipulate later
	let $prices = $('.sx-price-whole');
	let $fractions = $('.sx-price-fractional');
	let $googleFront = $('.O8U6h');
	//let $googleDeep2 = $('.qptdjc')
	let $googleDeep = $('.e10twf');
	let $amazon = $('#priceblock_ourprice');
	let $ebay = $('.s-item__price');


	// our list of sites to cycle through
	let dollarBank = [/*$prices, $fractions,*/ $googleFront, $googleDeep, $ebay];
	//let centBank = [$fractions];

	// edge case sites that need different formatting 
	$amazon.text(genRandDollar());
	$prices.text(genRandDollar());
	$fractions.text(genRandCent());


	// cycles through site classes and applies new prices for DOLLAR values
	dollarBank.forEach(el => {
		console.log(el);
		$(el).each((index, value) => {
			$(value).text(genRandDollar2());
		});
	});

	//cycles thru site classes and applies new prices for CENT values
	centBank.forEach(el => {
		$(el).each((index, value) => {
			$(value).text(genRandCent());
		});
	});
};

// Generate random numbers

const genRandDollar2 = () => {
	return `$ ${Math.floor(Math.random() * 2)}.${genRandCent()}`;
};

const genRandDollar = () => {
	return Math.floor(Math.random() * 2);
};

const genRandCent = () => {
	return Math.floor(Math.random() * 89) + 10;
};

const init = () => {
	// priceChanger();
	chrome.runtime.onMessage.addListener(() => {
		priceChanger();
	});
};

init();
