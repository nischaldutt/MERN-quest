function convertToRoman(num) {
  const decArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const romanArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let romanNum = '', i = 0

  while(num > 0) {
    for(i=0; i<13; i++) {
      if(num >= decArr[i]) break
    }
    romanNum += romanArr[i]
    num -= decArr[i]
  }
  return romanNum
}
 
convertToRoman(44)