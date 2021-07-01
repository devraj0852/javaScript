console.log("hello")

let imArray = ['adrak','pyaz','allu'];


// add a key value pair inside the local storage
localStorage.setItem('name','Dev')
localStorage.setItem('name2','yadav')
localStorage.setItem('sabji',JSON.stringify(imArray));

// clear the entire local storage
  // localStorage.clear();

//clear a particular key-value pair
  // localStorage.removeItem('name2')

//retrive an item from the local storage
let name = localStorage.getItem('name');
name = JSON.parse(localStorage.getItem('sabji'))
console.log(name)

//session

SessionStorage.setItem('Sessionname','sDev')
SessionStorage.setItem('Sessionname2','syadav')
SessionStorage.setItem('Sessionsabji',JSON.stringify
(imArray));
