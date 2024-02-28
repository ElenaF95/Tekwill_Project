let weightSarah = 65;
let heightSarah = 1.75;

let weightBob = 93;
let heightBob = 1.89;

let sarahBMI = weightSarah / (heightSarah ** 2);
let bobBMI = weightBob / (heightBob ** 2);

let minBMI = 18.5;
let maxBMI = 25;

if (sarahBMI >= minBMI && sarahBMI <= maxBMI){
    console.log('Sarah is a normal weight');
}else if (sarahBMI < minBMI) {
    console.log('Sarah is underweight');
}

if (bobBMI < minBMI || bobBMI > maxBMI){
    console.log('Bob is underweight or overweight');
}else {
    console.log('Bob is a normal weight');
}