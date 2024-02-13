
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

