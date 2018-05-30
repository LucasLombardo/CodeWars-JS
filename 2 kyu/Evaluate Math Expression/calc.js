// Expected: "12* 123/-(-5 + 2)" to be 492 but got 740 - Expected: 492, instead got: 740

var test = '12* 123/-(-5 + 2)';

function calc(expression) {
	//remove white space
	var str = expression.replace(/\s/g, '');
	str = str.replace(/-\(/g, '-1*(');
	//move left to right handling isolated parentheses while there are paras
	while (str.indexOf('(') !== -1) {
		let open = false,
			k = 0;
		for (let i = 0; i < str.length; i++) {
			if (str[i] === '(') (open = true), (k = i);
			if (str[i] === ')' && open) {
				str = str.slice(0, k) + String(evaluate(str.slice(k + 1, i))) + str.slice(i + 1);
				console.log('break ' + str);
				break;
			}
		}
	}
	return Number(evaluate(str));
}

function evaluate(str) {
	//evaluates an expression with no parenthesis
	console.log('eval : ' + str);
	var result = multDiv(str);
	console.log('multDiv : ' + result);
	result = addSubtr(result);
	console.log('addSubtr : ' + result);
	return result;
}

function multDiv(str) {
	//evaluates the multiplication and division in an expression
	var arr = splitExpr(str);
	var result = [''];
	console.log('arr is ' + arr);
	//loop through array pushing values into result
	var k = 0;
	var operator = false;
	for (let i = 0; i < arr.length; i++) {
		//if number and !operator assign to result[k]
		if (!isNaN(arr[i]) && !operator) result[k] = arr[i];
		//if number and operator set, set result[k] to calculation
		if (!isNaN(arr[i]) && operator) {
			result[k] = operator(Number(result[k]), Number(arr[i]));
			result[k] = String(Math.round(result[k] * 100000) / 100000);
			operator = false;
		}
		//if * || / set operator
		if (arr[i] === '*' || arr[i] === '/') {
			operator = arr[i] === '*' ? (a, b) => a * b : (a, b) => a / b;
		}
		//if + || - push to result and push empty val to result
		if (arr[i] === '+' || arr[i] === '-') {
			result.push(arr[i]);
			result.push('');
			k += 2;
		}
		// console.log('---- ' + i + '=>' + arr[i] + ' ----');
		// console.log(result);
	}
	return result.join('');
}

function addSubtr(str) {
	//evaluates addition and subtraction
	var arr = splitExpr(str);
	var result = '';
	//loop through array pushing values into result
	var operator = false;
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
	var arr = [''];
	//loop through, if number push to append to arr[k]
	var k = 0;
	for (let i = 0; i < str.length; i++) {
		//if number or decimal append to arr[k]
		if (Number(str[i]) || str[i] === '.') arr[k] += str[i];
		//if second operator append to arr[k]
		if ('+-*/'.indexOf(str[i]) !== -1 && '+-*/'.indexOf(str[i - 1]) !== -1) {
			arr[k] += str[i];
			//else if operator push to array and iterate k by 2
		} else if ('+-*/'.indexOf(str[i]) !== -1) {
			arr.push(str[i]), arr.push(''), (k += 2);
		}
	}
	return arr.filter(a => a !== '');
}
