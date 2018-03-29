function repeatStr (n, s) {
  return Array(n+1).join(s);
}

//cleaner solution using ES2015 string method, slightly less browser support
var repeatStr = (n, s) => s.repeat(n);