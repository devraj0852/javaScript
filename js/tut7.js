// array and objects in js

let marks = [34,23,35,63,29]
const fruits = ['orange','Apple','pineapple']
const mixed = ['str',85,[3,9]];
const arr = new Array(53,45,89,'Orange');

marks.push(555)
//marks.pop()
marks.reverse()
//marks.shift()
// marks.splice(1,4)
marks.unshift(4556)
// console.log(marks)
console.log(arr)

let marks2 = [5,6,8,9]
marks = marks.concat(marks2);
console.log(marks)


let myobj = {
    name: 'devendra',
    isActive: true,
    marks:[5,6,8,4]
};
console.log(myobj);
