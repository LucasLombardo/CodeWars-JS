var humanYearsCatYearsDogYears = function(n) {
	if(n === 1){
		return [1,15,15];
	}
	return [n, 24+(n-2)*4, 24+(n-2)*4];
}