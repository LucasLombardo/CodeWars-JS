function pigIt(str) {
	var words = str.split(' ').map(str => str.slice(1) + str[0] + 'ay');
	return words.join(' ');
}
