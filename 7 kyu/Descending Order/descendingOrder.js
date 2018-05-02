function descendingOrder(n) {
	var result = String(n).split('');
	return Number(result.sort((a, b) => b - a).join(''));
}
