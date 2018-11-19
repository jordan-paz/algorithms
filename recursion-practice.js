let countElements = (array) => {
  //count he number of items, recursively
  if(array.length){
    return 1 + countElements(array.slice(1))
    }
  else {
      return 0;
    }
}

console.log(countElements([0,1,2,3,4,5]))

let isPalindrome = (word) => {
  if (word.length == 1) {
    return true
  }
  if (word.charAt(0) !== word.charAt(word.length - 1)){
    return false
  }
  else {
    return isPalindrome(word.slice(1,-1))
  }
}
