function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('result: ', num);
}
printResult(add(5, 2));
function addHandler(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValue;
combineValue = add;
//combineValue = printResult;
console.log(combineValue(1, 2));
addHandler(1, 5, function (result) {
    console.log(result);
});
