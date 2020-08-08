class Parent
{
    constructor()
    {
        this.fatherName ="Schwerznegger";
    }
}

class Child extends Parent
{
    constructor(name)
    {   
        super();// for calling/inheriting any parent class to extend, we use super()
        this.name = name;
    }
    //method = class bhitore je function thakey take method bole
    getFullName()
    {
        return `${this.name} ${this.fatherName}`;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2.getFullName())