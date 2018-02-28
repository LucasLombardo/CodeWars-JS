function foldTo(distance){
	if(distance<=0){
		return null;
	}
	var total = 0.0001,
		folds = 0,
		width = 0.0001;
	while(distance>total){
		folds += 1;
		total += width;
		width *= 2;
	}
	return folds;
}