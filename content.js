const showLoading = () => {
	$('#loading-screen').remove();
	const $loadingScreen = $('<div id="loading-screen"/>');
	console.log('hi', $loadingScreen);
	$('body').append($loadingScreen);
};

const priceChanger = () => {
	let $prices = $('.sx-price-whole');
	let $fractions = $('.sx-price-fractional');
	let $googleFront = $('.O8U6h');
	let $googleDeep = $('.e10twf T4OwTb');
	let $amazon = $('#priceblock_ourprice');
	let $ebay = $('.s-item__price');

	let dollarBank = [$prices, $fractions, $googleFront, $googleDeep, $ebay];
	let centBank = [$fractions];

	$amazon.text(genRandDollar());

	dollarBank.forEach(el => {
		$(el).each((index, value) => {
			$(value).text(genRandDollar());
		});
	});

	centBank.forEach(el => {
		$(el).each((index, value) => {
			$(value).text(genRandCent());
		});
	});
};

const genRandDollar = () => {
	return Math.floor(Math.random() * 2);
};

const genRandCent = () => {
	return Math.floor(Math.random() * 89) + 10;
};

const init = () => {
	chrome.runtime.onMessage.addListener(() => {
		showLoading();
		priceChanger();
	});
};

init();
