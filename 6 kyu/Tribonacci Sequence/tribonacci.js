function tribonacci(signiture,n){
    const arr = [...signiture];
    //handle n of less than 4
    if(n<4) return arr.slice(0,n);
    //execute tribonacci
    do {
        let i = arr.length-1;
        arr.push(arr[i]+arr[i-1]+arr[i-2]);
    } while (arr.length<n);
    return arr;
}