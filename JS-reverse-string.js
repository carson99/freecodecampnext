function reverseString(str) {
    var splitStr = str.split("");
    //console.log(splitStr);
    var reversedStr = splitStr.reverse();
    //console.log(reversedStr);
    var joinStr = reversedStr.join("");
    //console.log(joinStr);
    
    return joinStr;
  }
  
  reverseString("hello");
  /*Make string an array, 
  split up string into individual letters, 
  reverse the order, 
  make it back into a string, 
  print string*/
  
  /* also
  function reverseString(str) {
  var splitStr;
  return splitStr = str.split("").reverse().join("");
}*/