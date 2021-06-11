// if & else

const age = 28;
 if (age==19){
     console.log("age is 19");
 }
 else if(age==29){
     console.log(`age is ${age}`)
 }
 else{
     console.log('age is not 19')
 }


 const doesDrive =true;

 if(doesDrive && age>18){
     console.log('you can drive')
 }
 else{
     console.log(`you can't drive`);
 }


 // ternary operator

// console.log(condition?  'true':  'false' )
 console.log(age==45? 'age is 45': 'age is not 45')


// switch

switch (age) {
    case 18:
        console.log("you r in 18")
        break;
    case 28:
        console.log('you r in 28')
        break;
    case 45:
        console.log('you are in 45')
        break;
    default:
        console.log('you are unknown age')
        break;
}