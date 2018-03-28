function isValidWalk(walk) {
	if(walk.length!==10) return false;
	var counts = {};
	walk.forEach(function(card){ 
		counts[card] = (counts[card] || 0)+1;
	});
	return counts["n"]===counts["s"] && counts["e"]===counts["w"];
}