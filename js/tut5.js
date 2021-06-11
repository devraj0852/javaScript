// type conversion and coercion

let myVar;
myVar = String(43)
console.log(myVar,(typeof myVar))


let booleanVar = String(true);
console.log(booleanVar,typeof booleanVar);


let date = String(new Date());
console.log(date,(typeof Date()));


let arr = String([1,2,3,4,5]);
console.log(arr.length,(typeof arr));


let str = Number('3434');
str = Number("343d4");
str = Number(true)
str = Number([1,2,3,4,5,6,7,8])
str = Number(true)
console.log(str)

let number = parseFloat('32.216')
console.log(number.toFixed(22),(typeof number)) // toFixed is a after point print number


// Type coercion

let mystr = ("546");
let mynum = 34;

console.log(mystr + mynum);