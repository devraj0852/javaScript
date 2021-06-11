// function

let name = 'Rohan'
function greet(name) {
    console.log(`happy birthday ${name}`)
    
}

greet(name, 'thanks')


// 2nd way to function

const mygreet = function Name(name) {
    let = msg = `any msg`;
    return msg
}
let Name1 = 'abc';
let val = mygreet (name)
console.log(val);


// obj in function

const myobj ={
    name:'dev',
    game: function() {
        return "gta";
    }
}
console.log(myobj.game())


///////////

arr = ['fruit','vegetable','furniture'];

arr.forEach(function (element,index,array) {
    console.log(element,index)
})


////////////////////////

if (1) {
    var i = 230;
    console.log(i)
}
console.log(i);

function ui(name) {
    let i = 10;
    console.log(i);
    return `This is a ${name} ui`;
}
console.log(ui("Dev"),i)