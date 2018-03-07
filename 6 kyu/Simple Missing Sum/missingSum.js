function solve(arr) {
	//loop through starting at 1 unitil isPossibleSum evals to false
	for(var i=1; i<9999; i++){
		if(isPossibleSum(arr, i)!=true){
			return i;
		}
	}
}

function isPossibleSum(arr, n){
	//return true if any of the subsets equal n
    var subset = createSubsets(arr,n)
    var result = false;
    for(var i = 0; i<subset.length; i++){
    	if(subset[i].reduce(function(a,b){return a+b},0)===n){
    		result = true
    	}
    }
    return result;
}

function createSubsets(arr, n) {
	//create subset of possible array sums less than n
	arr = arr.filter(function (value) {
        return value <= n;
    });
    arr.sort(function (a, b) {
        return b - a;
    });
    var result = [];
    while (arr.length > 0) {
        var i;
        var sum = 0;
        var addedIndices = [];
        for (i = 0; i < arr.length; i++) {
            if (sum + arr[i] <= n) {
                sum += arr[i];
                addedIndices.push(i);
            }
        }
        var subset = [];
        for (i = addedIndices.length - 1; i >= 0; i--) {
            subset.unshift(arr[addedIndices[i]]);
            arr.splice(addedIndices[i], 1);
        }
        result.push(subset);
    }
    return result;
}

