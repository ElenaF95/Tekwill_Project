//----------1----------//
const student = {
    name: 'John',
    lastName: 'Doe',
    faculty: 'history',
    year: 3
};
const dataStudent = ({name, lastName, faculty, year}) => {
    const fullName = `${name} ${lastName}`;
    
    return [fullName, faculty, year];
}; 
console.log(dataStudent(student));

//----------2----------//
const colors = ['red','green','blue','violet'];
const selectedColors = ([color1, , color3]) => {
    console.log(color1);
    console.log(color3);
};
selectedColors(colors);

//----------3----------//
const numbersArray = (...numbers) => [...numbers];
console.log(numbersArray(4,5,7,8,9,7,6,9));
 
//----------4----------//
const list1 = ['milk','banana','flour'];
const list2 = ['egg','butter','vanilla'];

const cakeRecipe = [...list1, ...list2];

console.log(cakeRecipe);

//----------5----------//
const newStudent = {...student, language: 'en'};
console.log(newStudent);

//----------6*----------//
const stringToConvert = (string) => {
    const lowerCaseString = string.toLowerCase();
    const charCounts = {};
    for (const char of lowerCaseString) {
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
    let result = '';
    for (const char of lowerCaseString) {
      if (charCounts[char] > 1) {
        result += ')';
      } else {
        result += '(';
      }
    }
    return result;
}
console.log(stringToConvert('din'));
console.log(stringToConvert('recede'));
console.log(stringToConvert('Success'));
console.log(stringToConvert('(( @'));

//----------7*----------//
const numbersList1 = [2, 4, 0, 100, 4, 11, 2602, 36];
const numbersList2 = [160, 3, 1719, 19, 11, 13, -21];
 
const findOutlier = (numbers) => {
    let evens = numbers.filter((n) => n % 2 === 0);
    let odds = numbers.filter((n) => n % 2 !== 0);
    
    return evens.length === 1 ? evens[0] : odds[0];
}
console.log(findOutlier(numbersList1));
console.log(findOutlier(numbersList2));
 
 