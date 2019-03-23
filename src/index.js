module.exports = function getZerosCount(number, base) {
  var rec = [];
  var divisor = 2;
    while(divisor < base) {
      while(base % divisor == 0) {
        rec.push(divisor);
          base /= divisor;
          }
        divisor++;
      }
      if (base > 1) {
        rec.push(base);
      }
  
  var zeros = [];
    for (var i = 0; i < rec.length; i++) {
      var count = 0;
      for (var j = i; j < rec.length; j++) {
        if (rec[i] === rec[j]) {
          count++;
           } 
      }

  var result = 0;
  var j = rec[i];
  while(true) {
    result += (number - number % j) / j;
    j *= rec[i];
    if (j > number) {
      break;
      }
    }
    zeros.push((result-result%count)/count);
  }
  return Math.min.apply(Math,zeros);
}