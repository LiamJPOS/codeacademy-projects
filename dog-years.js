let myAge = 33;
// The first two years of a dog’s life count as 10.5 dog years each.
// Each year following equates to 4 dog years.
let earlyYears = 2;
earlyYears *= 10.5;

//Since early years are accounted for we can subtract them from myAge
let laterYears = myAge - earlyYears;
laterYears *= 4;

//myAge converted to dog years
let dogYears = earlyYears + laterYears

let myName = "Liam".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${dogYears} old in dog years.`)
