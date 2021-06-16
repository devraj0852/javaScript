
let cont = document.querySelector('.no');
cont = document.querySelector('.container');
    
console.log(cont.childNodes)
console.log(cont.children)
let nodetype = cont.childNodes[1].nodeType

/// node type
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType 

let container = document.querySelector('div.container')

console.log(container.children[1])
console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextSibling)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling)