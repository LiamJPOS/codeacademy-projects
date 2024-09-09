let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber)

let early = ''
if (raceNumber >= 1000) {
  early = true;
}
else {
  early = false;
}

let runnerAge = 18;

if (runnerAge >= 18 && early) {
  raceNumber += 1000;
}

if (runnerAge > 18 && early) {
  console.log(`You will race at 9:30am. Your race number is ${raceNumber}`)
}
else if (runnerAge > 18 && early === false) {
  console.log(`You will race at 11:00am. Your race number is ${raceNumber}`)
}
else if (runnerAge < 18) {
  console.log(`You will race at 12:30am. Your race number is ${raceNumber}`)
}
else {
  console.log("Please see registration desk (for some reason)")
}