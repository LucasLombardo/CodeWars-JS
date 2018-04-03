function findMissingLetter(arr) {
	count = arr[0].charCodeAt();
	for(var i=1; i<arr.length; i++){
		if(arr[i].charCodeAt() != count+1) return String.fromCharCode(count+1);
		count++;
	}
}