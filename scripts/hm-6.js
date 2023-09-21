//----------1----------//
let person = {
    name: 'John',
    age: 30,
    city: 'New-York'
}
function info(user) {
    let keys = Object.keys(user);
    let i = 0;
    while(i < keys.length) {
        let key = keys[i];
        console.log(`${key}: ${user[key]}`);
        i++;
    }
} 
info(person); 


//----------2----------//
let initialKey = 'name';

function hasKey(object) {
    for (key in person) {
        let key = initialKey;
        if(object.hasOwnProperty(key)){
            return true;
        } else {
            return false;
        }
    }
}
console.log(hasKey(person));
 
//----------3----------//
let phrase = {
    prop1: 'Hello',
    prop2: 'World',
    prop3: '!'
}
function combinedWords(object) {
    let newPhrase = '';
    let keys = Object.keys(object);
    let i = 0;
    do{
        let key = keys[i];
        let value = object[key];
        newPhrase += value;
        i++;
    } while (i < keys.length);
    return newPhrase;
}  
console.log(combinedWords(phrase));
 
//----------4----------//
let newString = 'Hello world, my name is Albert';

function vowels(string) {
    let stringArray = string.split('');
    let vowelsList = ['a','e','i','o','u','y','A','E','I','O','U','Y'];
    let vowelsCount = 0;
    let i = 0;
    while(i < stringArray.length) {
        i++
        if(vowelsList.indexOf(stringArray[i]) !== -1){
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(vowels(newString));
 
//----------5----------//
let studentsScores = {
    John: [8, 7, 9],
    Mary: [9, 9, 10],
    Alex: [6, 8, 7]
}
function getAverageScore(scores) {
    let averageScore = Object.assign({},scores);
    for (Element in scores) {
        let value = scores[Element];
        
        let i = 0;
        let sum = 0;
        let arrayLength = value.length;

        while (i < arrayLength) {
            sum += value[i];
            i++;
        }
        let medium = sum / arrayLength;
        averageScore[Element] = `medium: ${medium}`;
    }
    return averageScore;
};
console.log(getAverageScore(studentsScores));
 
//----------6----------//
let initialString = 'Hello, world!';

function reverseString(string) {
    let stringArray = string.split('');
    let newStringArray = [];
    
    let newString = newStringArray.join('');
    let i = stringArray.length;
    do{
        i--;
        newString += stringArray[i];
    } while (i > 0);
    return newString;
}
console.log(reverseString(initialString));
 
//----------7----------//
let newWord = 'level';

function isPalindrome(word) {
    let wordArray = word.split('');
    let i = 0;
    let j = wordArray.length - 1;
    while(i < j) {
        i++;
        j--;
        if(wordArray[i] != wordArray[j])
        return false;
    }
    return true;
}
console.log(isPalindrome(newWord));