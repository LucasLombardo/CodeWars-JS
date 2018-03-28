function isValidWalk(walk) {
	var counts = {};
	walk.forEach(function(card){ 
		counts[card] = (counts[card] || 0)+1;
	});
	return counts["n"]===counts["s"] && counts["e"]===counts["w"];
}