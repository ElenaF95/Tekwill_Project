//----------1----------//
const studentGrades = [
    { name: 'Anna', note: 9 },
    { name: 'Denis', note: 7 },
    { name: 'Cristian', note: 8 },
    { name: 'Daniel', note: 6 },
    { name: 'Elena', note: 10 }
];
const averageGrade = studentGrades.reduce((acc,student) => { 
    let medium = acc + student.note/studentGrades.length;
    return medium;
}, 0);
console.log(averageGrade);
 
//----------2----------//
const products = [
    {name: 'Tshirt', price: 50, isAvailable: true },
    {name: 'Pants', price: 80, isAvailable: false },
    {name: 'Jacket', price: 120, isAvailable: true },
    {name: 'Shirt', price: 60, isAvailable: true },
    {name: 'Skirt', price: 40, isAvailable: false }
];

const productsList = products.filter((product) => product.isAvailable == true).map((product) => product.name);
console.log(productsList);

//----------3----------//
const numbers = [10, 5, 8, 15, 3, 20];
const maxNumber = numbers.reduce((acc, number) => number > acc ? number : acc, 0);
console.log(maxNumber);

//----------4----------//
const studentScores = [
    {John: [8, 7, 9]}, 
    {Mary: [9, 9, 10]}, 
    {Alex: [6, 8, 7]}
];
const averageScore = studentScores.reduce((acc,student) => {
    let key = Object.keys(student)[0];
    let value = student[key];
    let sum = value.reduce((acc, score) => acc + score, 0);
    
    acc[key] = sum / value.length;
    return acc;
},{});
console.log(averageScore);

