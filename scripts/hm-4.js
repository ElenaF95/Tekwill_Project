//----------1----------//
const fruits = [];
fruits.push('apple','banana','orange');
console.log(fruits.length);
console.log(fruits);

//----------2----------//
const numbers = [1,2,3,4,5];
const removedLastNumber = numbers.pop();
console.log(numbers);
const removedFirstNumber = numbers.shift();
console.log(numbers);

//----------3----------//
const colors = ['red','green','blue','yellow'];
const colorIndex = colors.indexOf('green');
const hasOrange = colors.includes('orange');
console.log(colorIndex);
console.log(hasOrange);

//----------4----------//
const names = ['John','Jane','Mike','Jennifer'];
const addedName = names.unshift('David');
const nameIndex = names.indexOf('Mike');
console.log(names);
console.log(nameIndex);

//----------5----------//
const numbers1 = [2,4,6,8,10];
const hasNumber = numbers1.includes(5);
console.log(`The array contains number 5 and this is ${hasNumber}`);
numbers1.push(12);
console.log(numbers1);

//----------6----------//
const monthsOfTheYear = ['December','January','February','March','April','May','June','July','August','September','October','November'];
monthsOfTheYear.sort();
console.log(monthsOfTheYear);

//----------7----------//
const filteredMonths = monthsOfTheYear.filter((month) => month.length > 3);
console.log(filteredMonths);

//----------8----------//
const months = ['December','January','February','March','April','May','June','July','August','September','October','November'];
console.log(months.slice(7,12));

//----------9----------//
const monthsFilter = monthsOfTheYear.filter((month) => month.length >= 5);
const string = monthsFilter.join('-');
console.log(string);