function checkWord(board, word) {
	var result = false;
	//loop through board checking for possible positions of the first letter
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === word[0]) {
				//if letter found check if the rest of the word can be made at the current position
				if (checkStart(board, word.slice(1, word.length), [i, j])) result = true;
			}
		}
	}
	return result;

	function checkStart(board, word, position) {
		//checks if word can be made at given starting position
		var newboard = [...board].map(arr => [...arr]);
		var possibleSlots = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
		//set current positions letter to 0 in new board
		newboard[position[0]][position[1]] = 0;
		//loop through possible slot array checking for next letter in the word
		for (let i = 0; i < 8; i++) {
			let row = position[0] + possibleSlots[i][0];
			let col = position[1] + possibleSlots[i][1];
			//if next letter found, check if the rest of the word can be made
			if (checkSlot(board, word[0], row, col)) {
				//base case: if word is one letter, return true
				if (word.length < 2) return true;
				//recursive call to check the rest of the word
				if (checkStart(newboard, word.slice(1, word.length), [row, col])) {
					return true;
				}
			}
		}
		return false;

		function checkSlot(board, letter, row, col) {
			//checks if the given position is valid and matches the letter
			if (board[row] !== undefined) {
				return board[row][col] === letter;
			}
			return false;
		}
	}
}
