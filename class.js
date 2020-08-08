class Student
{
    constructor(sId,sName)
    {
        this.ID = sId;
        this.Name=sName;
        this.School= "Rajuk Uttara Model College";
    }
}

const student1 = new Student(12,"Shuvo");
const student2 = new Student(13,"Joytu");
console.log(student1.Name,student2.Name);