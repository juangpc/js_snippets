
function addTwo(a, b) {
  return new Promise((resolve, reject) => {
    if (a > 10) {
      reject('number greater than 10.');
    } else {
      resolve(a + b);
    }
  }).then((num) => {
    console.log('resolving promise');
    console.log(`num: ${num}`);
    return num;
  })
}

console.log('----------------');

addTwo(1,2)
  .then(num => addTwo(num, 4))
  .then(num => addTwo(num, 4))
  .then(num => addTwo(num, 4))
  .then(num => console.log(`Final: ${num}`),
        str => console.log(str))
// ----------------------------
// another example
// ----------------------------

let globalNumber = 0;

function numberPlusNumber(number) {
  return new Promise((resolve, reject) => {
    // const number = Math.floor(Math.random() * 10);
    globalNumber += number;
    setTimeout(() => {
      resolve(globalNumber);  
    }, Math.floor(Math.random() * 1000));
    
  }).then((n) => {
      console.log(`number: ${n}`);
      return n});
}

console.log('--------------');
obtainNumberPlusOne(1)
  .then((number) => numberPlusNumber(1))
  .then((number) => numberPlusNumber(2))
  .then((number) => numberPlusNumber(4))

