function calc(expression) {
	var str = expression.replace(/\s/g, '');
	//evaluate statements inside parentheses and remove them
	while (str.indexOf('(') !== -1) {
		let open = false,
			k = 0;
		for (let i = 0; i < str.length; i++) {
			if (str[i] === '(') (open = true), (k = i);
			if (str[i] === ')' && open) {
				str = str.slice(0, k) + String(evaluate(str.slice(k + 1, i))) + str.slice(i + 1);
				str = str.replace(/--/g, '+');
				break;
			}
		}
	}
	//evaluate the remaining string and round to millionths
	return Math.round(Number(evaluate(str)) * 1000000) / 1000000;
}

function evaluate(str) {
	//evaluates an expression with no parenthesis
	var result = multDiv(str);
	result = addSubtr(result);
	return result;

	function multDiv(str) {
		//evaluates the multiplication and division
		var arr = splitExpr(str),
			result = [''],
			k = 0,
			operator = false;
		for (let i = 0; i < arr.length; i++) {
			//if number and operator not set assign to result[k]
			if (!isNaN(arr[i]) && !operator) result[k] = arr[i];
			//if number and operator set, set result[k] to calculation and operator to false
			if (!isNaN(arr[i]) && operator) {
				result[k] = operator(Number(result[k]), Number(arr[i]));
				result[k] = String(Math.round(result[k] * 10000000) / 10000000);
				operator = false;
			}
			//if * or / set operator function
			if (arr[i] === '*' || arr[i] === '/') {
				operator = arr[i] === '*' ? (a, b) => a * b : (a, b) => a / b;
			}
			//if + or - push to result and push empty val to result
			if (arr[i] === '+' || arr[i] === '-') {
				result.push(arr[i]);
				result.push('');
				k += 2;
			}
		}
		return result.join('');
	}

	function addSubtr(str) {
		//evaluates addition and subtraction
		var arr = splitExpr(str),
			result = '',
			operator = false;
		for (let i = 0; i < str.length; i++) {
			if (!isNaN(arr[i]) && !operator && result === '') {
				//if number and result === '' assign result[k] to number
				result = arr[i];
			} else if (isNaN(arr[i])) {
				//if + or -, set operator
				operator = arr[i] === '+' ? (a, b) => a + b : (a, b) => a - b;
			} else if (operator) {
				//operate
				result = String(operator(Number(result), Number(arr[i])));
				operator = false;
			}
		}
		return result;
	}

	function splitExpr(str) {
		//splits an expression with no parenthesis into an array
		var arr = [''],
			k = 0;
		for (let i = 0; i < str.length; i++) {
			//if number or decimal append to arr[k]
			if (!isNaN(str[i]) || str[i] === '.') arr[k] += str[i];
			//if second operator in a row append to arr[k]
			if ('+-*/'.indexOf(str[i]) !== -1 && '+-*/'.indexOf(str[i - 1]) !== -1) {
				arr[k] += str[i];
				//else if operator push to array and iterate k by 2
			} else if ('+-*/'.indexOf(str[i]) !== -1) {
				arr.push(str[i]), arr.push(''), (k += 2);
			}
		}
		return arr.filter(a => a !== '');
	}
}
