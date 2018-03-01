function snail(array){
	var result = [];
	while(array.length>1){
		//push top row to result
		result.push(array[0]);
		//remove the top row from 2d array
		array.shift();
		//rotate the 2d array clockwise
		array = rotate(array);
		console.log(array)
	}
	result.push(array[0]);
	return result;
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
	//if only given single value, return that value
	return result;
}




[].concat.apply([], arrays);