function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult1(num: number) {
  console.log('result: ', num);
}

printResult1(add(5, 2));

function addHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineValue: (a: number, b: number) => number;

combineValue = add;
//combineValue = printResult;

console.log(combineValue(1, 2));

addHandler(1, 5, (result) => {
  console.log(result);
  return result;
});
