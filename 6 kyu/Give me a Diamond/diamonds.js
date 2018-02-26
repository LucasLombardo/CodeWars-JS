function diamond(n){
	if(n%2===0 || n<1){
		return null;
	}
	var arr = [Array(n+1).join("*")];
	for(var i = n-2; i > 0; i-=2){
		stars = Array(n-(n-i)+1).join("*");
		whiteSpace = Array((n-i)/2+1).join(" ");
		arr.push(whiteSpace + stars);
		arr.unshift(whiteSpace + stars);
	}
	return arr.join("\n") + "\n";
}