module.exports = function reverse (n) { 
  if (n < 0) {
    n = n * (-1);
  }
  let arrNum = Array.from(String(n), Number);
  let newArr = [];
  for(let i = arrNum.length - 1; i > -1; i--) {
      newArr = newArr + arrNum[i];
  }
  let signNumber = n < 0 ? -Number(newArr) : Number(newArr);
  return signNumber;
}
