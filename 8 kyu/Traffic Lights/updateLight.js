function updateLight(current) {
	var lights = ['green', 'yellow', 'red', 'green'];
	return lights[lights.indexOf(current) + 1];
}
