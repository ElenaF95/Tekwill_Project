//----------1----------//
const fruits = ['apple','banana','orange'];
for (let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
};

//----------2----------//
const numbers = [1,2,3,4,5];
let sum = 0; 
for (let i=0; i <= 5; i++){
    sum +=i
    console.log(sum);
};

//----------3----------//
const names = ['John','Jane','Mikhael','Jennifer','Bobby'];
for (let i=0; i < names.length; i++){
    console.log(names[i]);
    for (let j=0; j < names[i].length; j++){
        console.log(names[i].length);
    };
};

//----------4----------//
const company = [
    ['Robin','Tammy','Johnny','Melissa','Russell'],
    ['Travis','Hazel','Bradley','Kate','Claire','Lucy'],
    ['Victoria','Ronald','David'],
    ['Melanie','Jane','Frank','Drake']
];
for (let i=0; i< company.length; i++){
    for (let j=0; j < company[i].length; j++){
        console.log(company[i][j]);
    };
};

const departments = [
    ['Robin','Tammy','Johnny','Melissa','Russell'],
    ['Travis','Hazel','Bradley','Kate','Claire','Lucy'],
    ['Victoria','Ronald','David'],
    ['Melanie','Jane','Frank','Drake']
].reduce(function (a, b) {
    return a.concat(b);
  });
console.log(departments.sort());

//----------5----------//
const person = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    profession: 'Developer'
};
const keys = Object.keys(person);
console.log(keys.length);

//----------6----------//
const numbersN = [];
for (let i = 1; i <= 5; i++) {
    numbersN.push(i);
};
console.log(numbersN);

//----------7----------//
const numbersMax = [2,7,3,10,8];
let theBiggestNumber = numbersMax[0];
for (let i=1; i < numbersMax.length; i++){
    if (numbersMax[i] > theBiggestNumber){
        theBiggestNumber = numbersMax[i];
    }
};
console.log(theBiggestNumber);

//----------8----------//
const valuation = {
    math: 8,
    literature: 7,
    history: 9
};
const values = Object.values(valuation);
const getAverage = (numbers) =>{
    let sum = 0; 
    for (let i=0; i < numbers.length; i += 1){
        sum +=numbers[i];
    }
    return sum/numbers.length;
};
console.log(getAverage(values));

//----------9----------//
const myDog = new Object();
myDog.name = 'Snow',
myDog.age = 5,
myDog.color = 'white';

const puppiesNames = [];
for (let i = 1; i <= 5; i++) {
    puppiesNames.push(`Puppy_${i}`);
};

myDog.puppies = puppiesNames;
console.log(myDog);