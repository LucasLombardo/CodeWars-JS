function solution(input, markers) {
    var lines = input.split('\n');
    lines = lines.map(s => markers.reduce((a, c) => a.split(c)[0].trim(), s)
    );
    return lines.join('\n');
};