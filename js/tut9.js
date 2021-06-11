// For while & do while loops

for (let i=0; i<100;i++) {
    //console.log(i)
}

// while  

let j= 0;
while (j<10){
    j+=1
   // console.log(j)
}


// do while

let k =0;
do{
    //console.log(k)
    k+=1
}while (k<10);


let arr = [2,4,7,9,3,5];

for (let i =0; i<arr.length; i++){
    const element = arr[i];
   // console.log(element)
}

// arr.forEach(function(element) {
//     console.log(element)
// });


let obj = {
    name: "Rohan das ",
    age: 25,
    type: 'Dangerous Programmer',
    os: 'ubantu'
}
for (let key in obj){
    console.log(`the ${key} of object os ${obj[key]}`)
}