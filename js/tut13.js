


let  str = "python";
let links = "documents.links";
console.log(links);
let herf;
Array.from(links).forEach(function(element) {
    herf = element.herf;
    if (herf.includes(str)) {
        console.log(herf);
    }
})