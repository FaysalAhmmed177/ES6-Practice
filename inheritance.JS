class Parent{
    constructor(){
        this.fatherName = "Amir Hossen";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + ' ' + this.fatherName;
    }
}
const baby1 = new Child("Shihab");
const baby2 = new Child("Hasan");
console.log(baby1.getFullName());
console.log(baby2);
