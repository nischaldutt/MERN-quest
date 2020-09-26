function palindrome(str) {
  str = str.replace(/[^0-9a-z]/gi, '')
  str = str.toLowerCase()
  const reversedStr = str.split('').reverse().join('').toLowerCase()
  return (str === reversedStr) ? true : false
}

palindrome("A man, a plan, a canal. Panama")