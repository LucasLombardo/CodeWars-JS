function getDartboardScore(x, y) {
	//determine which number on board the shot is alligned with
	var numArr = [[11,14,9,12,5,20],[6,13,4,18,1,20],[11,8,16,7,19,3],[6,10,15,2,17,3]]
	var dartNum = String(numArr[quadrant(x,y)-1][numInQdrnt(x,y)])
	//determine which layer dart is on and return the result
	var layer = dartLayer(x,y);
	return (layer=="X"||layer.length>1)? layer : layer + dartNum;
}

function quadrant(x,y){
	//determine quadrant the coordinates are in
	if(x*y>0){
		//2 or 3
		return x>0? 2: 3;
	} else {
		//1 or 4
		return x>0? 4: 1;
	}
}

function numInQdrnt(x,y){
	//calculate the dart number in quadrant, 0-5
	var radians = Math.atan(y/x);
	var degrees = Math.abs(radians * (180/Math.PI));
	if(degrees/9<=1){
		return 0;
	} else{
		return Math.ceil((degrees-9)/18);
	}
}

function dartLayer(x,y){
	//calculate layer dart is in based on dist from 0,0
	var hypotenuse = Math.sqrt(x*x + y*y);
	if(hypotenuse<15.9){
		return hypotenuse<6.35? "DB": "SB";
	} else if (hypotenuse>99 && hypotenuse<107){
		return "T"
	} else if (hypotenuse>162 && hypotenuse<170) {
		return "D"
	} 
	return hypotenuse<170? "":"X";
}