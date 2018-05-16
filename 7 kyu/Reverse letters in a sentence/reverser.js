function reverser(sentence) {
	var strings = sentence.split(' ');
	for (let i = 0; i < strings.length; i++) {
		let reverse = strings[i]
			.split('')
			.reverse()
			.join('');
		strings[i] = reverse;
	}
	return strings.join(' ');
}
