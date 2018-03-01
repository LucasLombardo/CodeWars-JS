function accum(s){
	var result = [];
	for(var i=0; i<s.length; i++){
		let upper = s[i].toUpperCase();
		let lower = Array(i+1).join(s[i].toLowerCase());
		result.push(upper+lower)
	}
	return result.join("-");
}