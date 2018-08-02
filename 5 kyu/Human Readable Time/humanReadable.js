//first solution
function humanReadable(seconds) {
    const hrs = Math.floor(seconds/(60*60))
    const mins = (Math.floor(seconds/60)-60*hrs)
    const secs = (seconds % 60);
    return `${pad2(hrs)}:${pad2(mins)}:${pad2(secs)}`

    function pad2(n){
        return String(n).length > 1 ? String(n) : '0'+n;
    }
}

//refactor for dryness
function humanReadable(s) {
    const result = [];
    for(let i = 3600; i>=1; i/=60){
        let t = '0' + Math.floor(s/i);
        result.push(t.slice(-2)), s-=t*i;
    }
    return result.join(':');
}
