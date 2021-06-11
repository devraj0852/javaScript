const name = 'devendra';
const greeting = 'Good morning';
console.log(greeting +" "+ name);


let html;
html = "<h1> this is heading</h1>"+
        "<p> this is para </P>";
html = html.concat('this ', 'thq')
console.log(html)
console.log(html.length)
console.log(html.toLowerCase());
console.log(html.toUpperCase());  
console.log(html.indexOf('this'))
console.log(html.lastIndexOf('<'))
console.log(html.charAt(15))
console.log(html.endsWith(' '))
console.log(html.includes('para'))
console.log(html.substring(1,10))
console.log(html.slice(0,10));
console.log(html.split('>'));
console.log(html.replace('this','it'));

let fruit1 = 'orange';
let fruit2 = 'apple';
let myhtml =`hello ${name} 
            <h1>This is heading</h1> 
            <p> you like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myhtml
