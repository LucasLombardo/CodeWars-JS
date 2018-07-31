//first solution
function squareDigits(n) {
    const arr = String(n).split('').map(n=>n*n);
    return Number(arr.join(''));
}

//refactor
const squareDigits = n => +String(n).split('').map(n=>n*n).join('');