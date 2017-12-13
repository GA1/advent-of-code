

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

function checksum(s) {
  console.log("11111111111")
  var sumOfDiff = 0
  var lines = s.split('\n')
  console.log(lines)
  for (let i = 0; i < lines.length; i++) {
    var numbers = lines[i].split(/\S+/g)
    sumOfDiff += numbers[i].max() - numbers[i].min()
  }
  return sumOfDiff
}

module.exports = checksum;