function sumStrings(a, b) {
  //make lengths even
  if (a.length !== b.length) {
    a.length < b.length
      ? (a = Array(b.length - a.length + 1).join('0') + a)
      : (b = Array(a.length - b.length + 1).join('0') + b);
  }
  var result = '',
    carry = '0';
  //loop through numbers adding and carrying values
  for (let i = a.length - 1; i >= 0; i--) {
    let sum = String(Number(a[i]) + Number(b[i]) + Number(carry));
    carry = '0';
    //if > 1 character carry the excess
    if (sum.length > 1) {
      carry = sum[0];
      sum = sum[1];
    }
    //prepend sum to result
    result = sum + result;
  }
  //add on remaining carry
  result = carry + result;
  //clear any leading 0s
  while (result[0] === '0') {
    result = result.slice(1, result.length);
  }
  return result;
}
