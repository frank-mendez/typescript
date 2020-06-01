function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const numberOne = 5;
const numberTwo = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(numberOne, numberTwo, printResult, resultPhrase);
console.log(result);
