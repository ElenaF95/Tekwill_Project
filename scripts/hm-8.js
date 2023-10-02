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

//----------7*----------//