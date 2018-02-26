function wordsToMarks(str){
	var result = 0;
	for(i=0; i<str.length; i++){
		var alph = "abcdefghijklmnopqrstuvwxyz";
		for(j=0; j<alph.length; j++){
			if(str[i]===alph[j]){
				result+=j+1;
			}
		}
	}
	return result;
}