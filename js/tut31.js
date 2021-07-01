console.log("Hello")

class Employee {
    constructor(givenName, givenExprience, givenDivision){
        this.name = givenName;
        this.exprience = givenExprience;
        this.division = givenDivision;
    }
    slogan(){
        return `I m ${this.name} and company is the best`;
    }
    joinYear(){
        return 2021 -this.exprience;
    }
    static add(a,b){
        return a+b;
    }
}

class Programmer extends Employee{
    constructor(givenName,givenExprience, givenDivision, Language, github){
        super(givenName, givenExprience, givenDivision);
        this.language = Language;
        this.github = github;
    }

    favoriteLanguuage(){
        if (this.language == 'Python'){
            return 'Python';
        }
        else{
            return 'JavaScript'
        }
    }
    static multiply(a,b){
        return a*b;
    }
}

// harry = new Employee("Harry", 21, "Division");
// // console.log(harry.joinYear())
// console.log(harry.slogan())
// console.log(Employee.add(54,22))

rohan = new Programmer("Rohan", 3,"Lays", "Go", "Rohan220");
console.log(rohan)
console.log(rohan.favoriteLanguuage())
console.log(Programmer.multiply(10,55))