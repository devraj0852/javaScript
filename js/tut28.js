 console.log('Hello')

 // Object Literal : Object.prototype
 let obj = {
     name: 'Dev',
     Age: 25,
     Address: 'Hyd'
 }

 function Obj(giveName){
     this.name = giveName
 }

 Obj.prototype.getName = function(){
     return this.name;
 }

 Obj.prototype.setName = function(newName){
     this.name = newName;
}
 let obj2 = new Obj('Dev yadav');

 console.log(obj2);