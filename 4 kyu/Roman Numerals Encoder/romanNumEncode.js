function solution(num){
	var symbols   = [["M","",""],["C","D","M"],["X","L","C"],["I","V","X"]],
		seperated = seperateNum(num),
		converted = "";	
	for(i=0; i<4; i++){
		let n = seperated[i],
			s = "";
		switch(n){
			case 0: case 1: case 2: case 3:
				s = Array(n+1).join(symbols[i][0]);
				break;
			case 4: 
				s = symbols[i][0] + symbols[i][1];
				break;
			case 5: case 6: case 7: case 8:
				s = symbols[i][1] + Array(n-5+1).join(symbols[i][0]);
				break;
			case 9: 
				s = symbols[i][0] + symbols[i][2];
				break;
		}
		converted+=s;
	}
	//hack to account for invalid Roman Numeral answers in kata, actual notation would use barred symbols
	return seperated[0]>3? Array(seperated[0]+1).join("M")+converted.replace(/M/g, "") : converted;
}

function seperateNum(n){
	//create array of 000s, 00s, 0s, and 1s
	var seperated = [];
	for(var i=1000; i>=1; i/=10){
		seperated.push(Math.floor(n/i));
		n-=seperated[seperated.length-1]*i;
	}
	return seperated;
}