function countBits(n){
	var binary = [];
	while(n>1){
		n%2===0? binary.unshift(0) : binary.unshift(1);
		n = Math.floor(n/2);
	}
	return n!=0? 1+binary.reduce((accum, curr)=> accum + curr): 0;
}