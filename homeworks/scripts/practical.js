//----------------1-----------------//
const numbers = [5, 1, 3, 412, 12, 512];
let theBiggestNumber = numbers[0];
for (let i=0; i < numbers.length; i++){
   if (numbers[i] > theBiggestNumber){
      theBiggestNumber = numbers[i];
   }
};

const newNumbers = [5, 1, 3, 412, 12, 512];
let theSmallestNumber = newNumbers[0];
for (const number of newNumbers){
   if (number < theSmallestNumber){
      theSmallestNumber = number;
   }
};

console.log(theBiggestNumber);
console.log(theSmallestNumber);

//----------------2-----------------//
const people = [
   {
     name: 'Alex',
     city: 'Chisinau',
   },
   {
     name: 'Ivan',
     city: 'Chisinau',
   },
   {
     name: 'Joe',
     city: 'New York'
   },
   {
     name: 'Johan',
     city: 'Berlin'
   },
]

const grouping = (people) => {
   const newGroup = [];
   
   for (const item of people) {
      const { name, city } = item;
      
      if (!newGroup[city]) {
         newGroup[city] = name;
      } else {
         newGroup[city] = [newGroup[city], name]
      }
   }
   return newGroup; 
}
console.log(grouping(people));

//----------------3-----------------//
const str = 'one.two.three.four.five'; 

const array = str.split('.');

const result = array.reduce((acc, value) => {
  return { [value]: acc }
}, {});

console.log(result);