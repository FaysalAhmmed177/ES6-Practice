class Student{
        constructor(sId , sName){
             this.id = sId;
             this.name = sName;
             this.university = "Daffodil International University";
        }
}
const Student1 = new Student( 1 , "Faysal");
const Student2 = new Student( 2 , "Mahmudul");
console.log(Student1,Student2);

console.log(Student1.name,Student2.name);