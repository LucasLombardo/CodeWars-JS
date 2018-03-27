function payCheese(arr) {
	let wheels = arr.reduce((sum, curr)=>sum+curr);
	return "£" + Math.ceil(wheels/100)*35;
}