function songDecoder(s){
  const arr = s.replace(/WUB/g, ',').split(',');
  return arr.filter(s => s!=='').join(' ');
}