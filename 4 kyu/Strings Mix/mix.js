function mix(s1, s2) {
	//loop through alphabet adding objects with char frequencies and
	//stage array to convert into formatted string
	var alph = "abcdefghijklmnopqrstuvwxyz";
	var result = [];
	for(var i =0; i < alph.length; i++){
		var str1 = charFreq(s1, alph[i], 1);
		var str2 = charFreq(s2, alph[i], 2);
		if(str1.len === str2.len && str1.len >1){
			str1.num = 3;
			result.push(str1);
		} else if(str1.len > str2.len && str1.len >1){
			result.push(str1);
		} else if(str2.len>1){
			result.push(str2);
		}
	}
	return stageMix(result);
}

function charFreq(str, char, n){
	//create an object with char frequencies
	var newStr = "";
	for(i=0; i < str.length; i++){
		if(str[i]===char){
			newStr += char;
		}
	}
	var result = {
		len: newStr.length,
		str: newStr,
		num: n
	}
	return result;
}

function stageMix(arr) {
	//sort by length, str num, and alphabetically & stage the output
	arr = arr.sort(function(a,b){return b.len-a.len || a.num-b.num || a.str.localeCompare(b.str)});
	for(var i=0; i < arr.length; i++){
		if(arr[i].num === 3){
			arr[i].num = "=";
		} 
		arr[i] = arr[i].num + ":" + arr[i].str;
	}
	return arr.join("/");
}