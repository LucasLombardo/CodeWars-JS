function bingo(card, numbers) {
	//remove letters from number array and push in "FREE SPACE"
	var drawing = numbers.map(n => Number(n.replace(/[^0-9]/g, '')));
	drawing.push('FREE SPACE');
	//create array of arrays with all possible bingos (horizontal, vertical, and diags)
	var bcard = [...card].map(arr => [...arr]);
	bcard.shift();
	//add in vertical columns
	for (let i = 0; i < 5; i++) {
		let col = [];
		for (let j = 0; j < 5; j++) {
			col.push(bcard[j][i]);
		}
		bcard.push(col);
	}
	//add in diagonals
	bcard.push([bcard[0][0], bcard[1][1], bcard[2][2], bcard[3][3], bcard[4][4]]);
	bcard.push([bcard[0][4], bcard[1][3], bcard[2][2], bcard[3][1], bcard[4][0]]);
	console.log(bcard);

	//loop through each array checking for bingo
	for (let i = 0; i < bcard.length; i++) {
		if (isBingo(bcard[i], drawing)) return true;
	}
	//if no bingo return false
	return false;

	function isBingo(arr, drawing) {
		//takes array and returns true if all values match the bingo drawing
		for (let i = 0; i < arr.length; i++) {
			if (drawing.indexOf(arr[i]) < 0) return false;
		}
		return true;
	}
}
