// syntax

// class Mycalss{
//     constructor() {  }
//     methods() {}
//     methods1() {}
//     methods2() {}
//     ....
// }


class Employee{
    constructor(eName){
        this.eName = eName;
    }

    hi(){
        console.log(this.eName);
    }
}

let emp = new Employee('Pradeep');
emp.hi();

console.log(typeof emp);
console.log(typeof Employee);