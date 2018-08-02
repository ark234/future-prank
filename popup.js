$(() => {
	$('#dummy-btn').on('click', () => {
		chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
			const tabId = tabs[0].id;
			chrome.tabs.sendMessage(tabId, { clicked: true });
		});
	});
});
