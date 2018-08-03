const clear = () => {
	$('#box-parent').remove();
	$('#loading-screen').remove();
	$('body').removeClass('blur');
};

const showLoading = timeoutFunc => {
	clear();
	const randWait = Math.random() * 3000 + 2000;
	console.log('randWait', randWait);
	$('body').addClass('blur');
	const $loadingScreen = $(
		'<div id="box-parent"><p id="loading-text">Finding you the best deals on the Internet.</p><div class="box"><div class="cat"><div class="cat__body"></div><div class="cat__body"></div><div class="cat__tail"></div><div class="cat__head"></div></div></div></div>'
		// '<div id="loading-screen"><p id="loading-text">Automatically find and apply coupon codes when you shop online!</p></div>'
	);
	console.log('hi', $loadingScreen);
	$('body').prepend($loadingScreen);
	setTimeout(() => {
		timeoutFunc();
		clear();
	}, randWait);
};

const priceChanger = () => {
	//These variables target specific classes so that we can manipulate later
	let $prices = $('.sx-price-whole');
	let $fractions = $('.sx-price-fractional');
	let $googleFront = $('.O8U6h');
	//let $googleDeep2 = $('.qptdjc')
	let $googleDeep = $('.e10twf');
	let $ebay = $('.s-item__price');

	// our list of sites to cycle through
	let dollarBank = [/*$prices, $fractions,*/ $googleFront, $googleDeep, $ebay];
	let centBank = [$fractions];

	// edge case sites that need different formatting
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
	$('#priceblock_ourprice').text(genRandDollar2());
	chrome.runtime.onMessage.addListener(() => {
		showLoading(priceChanger);
	});
};

init();
