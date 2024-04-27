// let arrayNameWithoutType = []
// let arrayName: "type" []; //array shwos array becoz name is same for 2 variables
// let numbers = []; //'number' is implicity any [] means variable declare not initialize
// // Array of numbers
// let numArray: number[]= [1, 2, 3, 4, 2];//Type 'string' is not assignable to type 'number'iif "2" is added in array];
// // Array of strings: 
// let names: string[] = ["Alice", "Bob", "Charlie"];
// // using the array type
// let mixedArray: Array <number | string> = [1, "hello", 2]
//once type define value cant be change
// / data structure in programming
// multiple data, fro efficient programming, object making, data organizing, 
// arrays an ordered collectopn of values, all values should be of same type, indexes access means each value elements is positioned startin from zero
// usually zero index is main point  curly braces language has index has 1. create using square brackets
//     | pipe sign means or operator

let var1 = 1;
let var2 = 2;
let var3 = 3;
console.log(var1, var2, var3); // 1 2 3
let varArray = [1, 2, 3];
console.log(varArray[0], varArray[1], varArray[3]); // 1 2 3  // 1 2 3
console.log(varArray); // 1 2 3  // 1 2 3  // [ 1, 2, 3 ]

let firstNumber = varArray[0]
console.log(firstNumber);
console.log(firstNumber , varArray[0])
varArray[0] = 5;
console.log(firstNumber , varArray[0])

// [1, 2, 3] is a continuous array location
// runtime error is the reason where varArray[3] is not indicated as error as syntactically but its execution show undefine means it doesnt exist

// compile time error by vs code 

// runtime and logical error during writing and most difficult to identify