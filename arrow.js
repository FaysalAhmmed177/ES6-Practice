// function doubleIt(num){
// return num * 2;
// }
// const result1 = doubleIt(5);
// console.log(result1);

// var doubleIt = function(num){
//     return num * 2;
// }
// const result2 = doubleIt(2);
// console.log(result2);

const doubleIt = num => num * 2;
const result3 = doubleIt(10);
console.log(result3);

const add = (x, y) => x + y;
console.log(add(7, 3));

const give5 = () => 5;
console.log(give5());

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

console.log(doMath(7,5));