const person = { name: "Sadab Jaowad", phone:"01956320380",hobby:"bookworm",gfName:"Masu Ake"};

// const gfName = person.gfName;
// const phone = person.phone;
// const {phone, gfName} = person;
// console.log(gfName, phone);

const complexObject ={

    name:"Sadab Jaowad",
    info: {
        age:"21",
        birthdate:"24.08.1998",
        leader: "Tiger"
    }
}

const {leader} = complexObject.info;

//array destructure
const friends = ["Shakib Khan","Arman Khan","Amir Khan","Salman Khan","Shahrukh Khan"];
const [chotoFriend, ...restFriend] = friends;