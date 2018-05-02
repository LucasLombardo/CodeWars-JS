// Recursive Solution (was too slow for large arrays)

function longestSlideDown(pyramid, index) {
	index = index || 0;
	//base case
	if (pyramid.length < 2) return pyramid[0][index];
	var top = pyramid[0][index];
	//recursive calls
	var left = longestSlideDown(pyramid.slice(1, pyramid.length), index);
	var right = longestSlideDown(pyramid.slice(1, pyramid.length), index + 1);
	//return highest value slide
	return right > left ? top + right : top + left;
}

// Faster solution using for loop

function longestSlideDown(pyramid) {
	let pyr = [...pyramid];
	//loop through each layer bottom to top adding max child to each parent
	for (let i = pyr.length - 2; i >= 0; i--) {
		pyr[i] = pyr[i].map((n, index) => {
			let maxChild = Math.max(pyr[i + 1][index], pyr[i + 1][index + 1]);
			return n + maxChild;
		});
	}
	//top layer will now be the sum of max path of child nodes
	return pyr[0][0];
}

// test
pyramid = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];
longestSlideDown(pyramid);
