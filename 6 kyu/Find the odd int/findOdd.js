function findOdd(arr){
	var uniq = [...new Set(arr)];
	for(var i=0; i<uniq.length; i++){
		if(arr.filter(arr => arr === uniq[i]).length%2===1){
		return uniq[i];    
		}
	}
}