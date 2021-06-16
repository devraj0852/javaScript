
// we use propety in js. whose we use in css

let element = document.getElementById('myFirst')
// element = element.className
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerHTML = "<b>hi how are u?</b>"
console.log(element);


// let sel = document.querySelector('#myFirst')
// sel = document.querySelector('.child')
// sel = document.querySelector('div')
// sel.style.color = 'green'
//console.log(sel)


//  multi element selector

let elems = document.getElementsByClassName('child')
elems = document.getElementsByClassName('container')
elems = document.getElementsByClassName('div')
console.log(elems)


for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
   element.style.color = 'blue';
    
}

// Array.from(elems).forEach(element =>{
//     console.log(element);
//     element.style.color = 'blue';
// })
// console.log(elems[0].getElementsByClassName('child'))