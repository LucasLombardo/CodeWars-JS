function positiveSum(arr) {
	return arr.reduce((accum, n) => (n > 0 ? accum + n : accum + 0), 0);
}
