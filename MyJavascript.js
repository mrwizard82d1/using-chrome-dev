var step = 1;
var thing = "ants";

doStuff = function() {
	console.group("Steps");
	firstStep();
	secondStep();
	thirdStep();
	console.groupEnd();

	// %c applies a style to the resulting text
	console.group("%cFinishing part", "font-size: x-large");
	loadBanners();
	soundTrumpets();
	console.groupEnd();
}

firstStep = function() {
	console.group("step %i", step++);
	console.log("Finding %s", thing);
	console.log("Building %s farms", thing.slice(0, -1));
	console.log("Feeding %s", thing);
	console.groupEnd();
}

secondStep = function() {
	console.log("step %i", step++);
}

thirdStep = function() {
	console.log("step %i", step++);
}

loadBanners = function() {
	console.log("loadBanners");
}

soundTrumpets = function() {
	console.log("soundTrumpets");
}

