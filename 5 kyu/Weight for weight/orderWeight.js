function orderWeight(str){
	//split numbers into array with no empty spaces
	var arr = str.split(" ").filter(arr => arr!="");
	//sort array using sum of digits and string sort logic
		arr.sort(function(a,b){
		return sumOfDig(a)-sumOfDig(b) || String(a).localeCompare(String(b));
	});
	//stage and join array and return string
	return arr.join(" ")	
}

function sumOfDig(n){
	//calculate sum of digits
	var result 	= 0;
	n = String(n);
	for(var i=0; i<n.length; i++){
		result+=Number(n[i]);
	}
	return result;
}