
let element = document.createElement('li')

// add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title','mytitle')

let ul = document.querySelector('ul.this');
//ul.appendChild(element)
// console.log(ul)

// console.log(element)

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
let tnode = document.createTextNode('This is a creAted node for elem2');
element.appendChild(tnode)


element.replaceWith(document.getElementById('myul'));
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('herf');
elem2.removeAttribute('id');
elem2.setAttribute('title','myele2title');
console.log(elem2,pr)