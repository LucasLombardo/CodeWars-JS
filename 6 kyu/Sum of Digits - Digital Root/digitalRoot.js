function digital_root(n) {
	var str 	= String(n),
		result 	= 0;
	for(i=0; i<str.length; i++){
		result += Number(str[i]);
	}
	if(String(result).length>1){
		result = digital_root(result);
	}
	return result;
}