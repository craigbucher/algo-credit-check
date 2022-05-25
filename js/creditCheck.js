exports.creditCheck = function(cardNum) {
    const arr = []
    for (let i = 0; i < cardNum.length; i++) {
      // check if digit position is even or odd
      // if even
      if (i % 2 == 0) {
        // double the digit and check if less than 9
        if (cardNum[i] * 2 < 10) {
          //if so, add to result
          arr.push(cardNum[i] * 2);
        } else {
          // if not, sum the digits of the products and add to result
          arr.push(cardNum[i] * 2 - 9);
        }
      } else {
        // if digit position is odd
        // add to result, ensuring variable is a number
        arr.push(parseInt(cardNum[i], 10))
      }
    }
    // reduction function replaces code like this:
    //   var sum = 0;
    //   for (var j = 0; j < arr.length; j++) {
    //   sum += arr[j]
    //   }
     if (arr.reduce( (prv, cur) => prv + cur) % 10 === 0){
       // if sum modulo 10 is zero, the number is valid
      return 'The number is valid!';
    } else {
       // if it isn't, then the number isn't valid
      return 'The number is invalid!';
    }
}
console.log(exports.creditCheck('5541808923795240'))