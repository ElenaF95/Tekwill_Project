/*------TERNARY-OPERATOR-------*/
const number = 29;
const isEvenNumber = number%2==0 ? "Is even number" : "Is odd number";
console.log(isEvenNumber);


const loggedIn = false;
const isLoggedIn = loggedIn==true ? "User is logged in" : "User is not logged in";
console.log(isLoggedIn);


const unitPrice = 18;
const quantity = 35;
const stockAvailability = true;
const priceOfGoods = unitPrice*quantity;
const isGoodsAvailable = stockAvailability ? (priceOfGoods + '$') : "Out of stock";
console.log(isGoodsAvailable);


const currentYear = new Date().getFullYear();
const isLeapYear = currentYear % 400 === 0 || (currentYear % 4 === 0 && currentYear % 100 !== 0) ? "Is leap year" : "Is not leap year"
console.log(currentYear);
console.log(isLeapYear);


/*-----------SWITCH------------*/
const coutryCode = 'MD';
switch (coutryCode){
    case 'MD':
        console.log("Country name is Moldova");
        break;
    case 'RO':
        console.log("Country name is Romania");
        break;
    case 'UA':
        console.log("Country name is Ukraine");
        break;    
    case 'BG':
        console.log("Country name is Bulgaria");
        break;
    case 'PL':
        console.log("Country name is Poland");
        break;
    default:
        console.log("Not a valid country code");
}


const testScore = 90;
switch(true){
    case testScore <=100 && testScore > 89:
        console.log("A");
        break;
    case testScore >= 80 && testScore < 90: 
        console.log("B");
        break;
    case testScore >= 70 && testScore < 80:
        console.log("C");
        break;
    case testScore >= 60 && testScore < 70:
        console.log("D");
        break;
    case testScore >= 0 && testScore < 60:
        console.log("F");
        break;
    default:
        console.log("Not a valid score");    
}


/*-----------FUNCTION------------*/
function tellFortune(n, z, y, x){
    console.log(`You will be ${x} in ${y} and will get married to ${z} with ${n} kids.`);
}
tellFortune (3,'Ross','Bruxelles','Engineer');
tellFortune (2,'Chandler','Amsterdam','IT Manager');
tellFortune (3,'Joey','Palermo','Travel Agent');


function calculateDogAge(x){
    const dogAge = x * 7;
    console.log(`Your dog is ${dogAge} years old in dog years!`);
}
calculateDogAge(2);
calculateDogAge(4);
calculateDogAge(6);


const calculationSupply = (currentAge, foodPerDay, maxAge=100) => {
    let quantityOfFood = (maxAge - currentAge) * (foodPerDay * 365);
    console.log(`You will need ${quantityOfFood} kg of food to survive until you are ${maxAge} years old`);
}
calculationSupply(33,1);
calculationSupply(18,0.5);
calculationSupply(45,0.7);