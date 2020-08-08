const ages  = [12, 13, 14, 15];
const ages2 = [17, 18, 19, 20];
const ages3 = [27, 28, 26, 25];
//concatenate multiple arrays
const allAges = ages.concat(ages2).concat(5).concat(ages3);
//spread operator
const allAges2 = [...ages, ...ages2, 5, ...ages3];

console.log(allAges);
console.log(allAges2);

const businessman = 650;
const politician = 850;
const secretary = 550;
const money =[650,850,550]; 

//const maximum = Math.max(businessman,politician,secretary);
//const maximum = Math.max(money);=>output NaN
const maximum = Math.max(...money);
console.log(maximum);
