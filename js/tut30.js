console.log('Hello')

const proto = {
    slogan: function(){
        return `This is the best`;
    },
    changeName: function(newName){
        this.name = newName
    }
}

// This create harry object
const harry = Object.create(proto);
harry.name = 'Harry';
harry.role = 'programmer'
//harry.changeName('Harry2')
console.log(harry);

// This is also create obj in OLD version
const harry1 = Object.create(proto,{
    name: {value: 'Harry', writable: true},
    role: {value: 'programmer'}
});
harry1.changeName('Harry2')
console.log(harry1)  

// Employee constructor
function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function(){
    return `This company is the best. Regard, ${this.name}`;
}
let Dev = new Employee("Dev", 25000, 1);
console.log(Dev.slogan())

// Programmer
function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience)
    this.language = language
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2,0, "javaScript")
console.log(rohan);