console.log('hello')

document.getElementById('heading').addEventListener("mouseover",function(e){
    let variable;
console.log('You have chicked the heading');
    //location.href = 'https://www.google.com'
variable = e.target;
variable = e.target.classNane;
variable = Array.from(e.target.classList);
variable = e.offsetX;
variable = e.offsetY;
console.log(variable);
})