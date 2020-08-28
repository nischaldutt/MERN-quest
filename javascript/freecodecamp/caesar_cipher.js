function rot13(str) {
  let decodedStr = ''
  const length = str.length

  for(let i=0; i<length; i++) {
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      const asciiCode = str.charCodeAt(i) + 13
      if(asciiCode > 90) 
        decodedStr += String.fromCharCode((asciiCode - 90) + 64)
      else
        decodedStr += String.fromCharCode(asciiCode)
    }
    else 
      decodedStr += str[i]
  }
  return decodedStr
}

rot13("SERR PBQR PNZC");
