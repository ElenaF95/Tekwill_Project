//----------1----------//
const string = 'Today I went to the shop 123 and bought 4 bananas.';
const numbersRegex = /\d+/g;
const numbers = string.match(numbersRegex);
console.log(numbers);

//----------2----------//
const text = 'City postal codes: 12345, 98765, 54321';
const codesRegex = /\b\d{5}\b/g;

if (codesRegex.test(text)) {
   console.log('The postal codes are valid');
} else {
   console.log('The postal codes are not valid');
}

//----------3----------//
const filmsList = [
   '1 The Shawshank Redemption (1994)',
   '2 The Godfather (1972)',
   '3 The Godfather: Part II (1974)',
   '4 Pulp Fiction (1994)',
   '5 The Good, the Bad and the Ugly (1966)',
   '6 The Dark Knight (2008)',
   '7 12 Angry Men (1957)',
   '8 Schindler`s List (1993)',
   '9 The Lord of the Rings: The Return of the King (2003)',
   '10 Fight Club (1999)'
];
const filmsString = filmsList.join();

const filmsRegex = /\d+ [\s\w:,`]+ \((199[0-9]|20[0-2]\d)\)/g;
const films = filmsString.match(filmsRegex);
console.log(films);
       
//----------4----------//
const colorsList = [
   'AliceBlue #F0F8FF',
   'AntiqueWhite #FAEBD7',
   'Aqua #00FFFF',
   'Aquamarine #7FFFD4',
   'Azure #F0FFFF',
   'White #FFF',
   'Red #F00',
   'Green #0F0',
   'Blue #00F'
];
const colorsString = colorsList.join();

const colorsRegex = /\#\b[A-Z0-9]{6}\b/g;
const colors = colorsString.match(colorsRegex);
console.log(colors);

