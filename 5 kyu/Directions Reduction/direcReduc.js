function dirReduc(arr) {
	var result = [...arr];
	while (String(removePairs(result)) != String(result)) {
		//remove pairs and check if additional pairs that became adjacent can be removed
		result = removePairs(result);
	}
	return result;

	function removePairs(arr) {
		var removed = arr.join();
		var pairs = ['NORTH,SOUTH', 'SOUTH,NORTH', 'EAST,WEST', 'WEST,EAST'];
		//filter out adjacent pairs
		pairs.forEach(function(pair) {
			let remove = new RegExp(pair, 'g');
			removed = removed.replace(remove, '');
		});
		return removed.split(',').filter(n => n !== '');
	}
}
