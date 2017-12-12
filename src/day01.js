function captcha(s) {
  var chars = s.split('')
  var counter = 0
  let N = chars.length;
  for (let i = 1; i < N; i++)
    if (chars[i - 1] === chars[i])
      counter += Number(chars[i])
  if (s.length > 1)
    if (chars[0] === chars[N - 1])
      counter += Number(chars[N - 1])
  return counter
}

module.exports = captcha;