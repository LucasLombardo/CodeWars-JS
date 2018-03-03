function solution(n){
	let sum = 0;
	for(var i=0;i<n; i++){
		i%3===0||i%5===0? sum+=i: 0;
	}
	return sum;
}