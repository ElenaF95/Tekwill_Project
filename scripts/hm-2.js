let weightSarah = 65;
let heightSarah = 1.75;

let weightBob = 93;
let heightBob = 1.89;

let sarahBMI = weightSarah / (heightSarah ** 2);
let bobBMI = weightBob / (heightBob ** 2);

let minMBI = 18.5;
let maxMBI = 25;

if (sarahBMI >= minMBI && sarahBMI <= maxMBI){
    console.log('Sarah is a normal weight');
}else if (sarahBMI < minMBI) {
    console.log('Sarah is underweight');
}

if (bobBMI < minMBI || bobBMI > maxMBI){
    console.log('Bob is underweight or overweight');
}else {
    console.log('Bob is a normal weight');
}

