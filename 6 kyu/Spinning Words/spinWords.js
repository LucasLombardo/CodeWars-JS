function spinWords(str){
	let arr = str.split(" ");
	for(var i=0; i<arr.length; i++){
		if(arr[i].length>=5){
			arr[i] = reverseStr(arr[i]);
		}
	}
	return arr.join(" ");
}

function reverseStr(str){
	let count  = str.length-1,
		result = "";
	for(i=0; i<str.length; i++){
		result+= str[count];
		count--;
	}
	return result;
}