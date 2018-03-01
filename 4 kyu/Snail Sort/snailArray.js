function snail(array){
	var result = [];
	//while arrays length>1, remove top row, push top row to result & rotate array
	while(array.length>1){
		result.push(array.shift());
		array = rotate(array);
	}
	//push last value to result and stage result
	result.push(array[0]);
	return [].concat.apply([], result);
}

function rotate(arr){
	//rotates a 2d array clockwise
	var width 	= arr[0].length,
		height	= arr.length,
		result	= [];
	for(var j=width-1; j>=0; j--){
		let row = []
		for(var i=0; i<height; i++){
			row.push(arr[i][j])
		}
		result.push(row);
	}
	return result;
}