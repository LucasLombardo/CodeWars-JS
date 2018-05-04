function findShort(s) {
	var lengths = s.split(' ').map(s => s.length);
	return Math.min(...lengths);
}
