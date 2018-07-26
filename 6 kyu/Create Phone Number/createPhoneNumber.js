//first solution
function createPhoneNumber(numbers) {
	const arr = ['(', ...numbers];
	arr.splice(4, 0, ') ');
	arr.splice(8, 0, '-');
	return arr.join('');
}

//shortened but not as readable as it could be
const createPhoneNumber = arr => `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;

//final answer
const createPhoneNumber = arr => {
	const str = arr.join('');
	return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`;
};
