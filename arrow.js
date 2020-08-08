//function Declaration 
// function doubleIt(num)
// {
//     return num*2;
// }

//function Expression
// const doubleIt = function(num)
// {
//     return num*2;
// }

//Arrow function

const doubleIt = num => num*2;
const add = (x,y) => x+y;
const give5 = () => 5;
const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff;
    return result;
}

const result = doubleIt(5);
const result2 = add(50,40);
const result3 = give5();
const result4 = doMath(12,5);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);