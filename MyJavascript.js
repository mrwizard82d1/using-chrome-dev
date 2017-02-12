doStuff = function() {
	console.group("Steps");
	firstStep();
	secondStep();
	thirdStep();
	console.groupEnd();

	console.group("Finishing part");
	loadBanners();
	soundTrumpets();
	console.groupEnd();
}

firstStep = function() {
	console.group("firstStep");
	console.log("Finding ants");
	console.log("Building ant farms");
	console.log("Feeding ants");
	console.groupEnd();
}

secondStep = function() {
	console.log("secondStep");
}

thirdStep = function() {
	console.log("thirdStep");
}

loadBanners = function() {
	console.log("loadBanners");
}

soundTrumpets = function() {
	console.log("soundTrumpets");
}

