// FUNCTION

// let dogName = "rover";
// let dogWeight = 23;
// if (dogWeight > 20) {
//   console.log(dogName + " says WOOF WOOF");
// } else {
//   console.log(dogName + " says woof woof");
// }

// dogName = "spot";
// dogWeight = 13;
// if (dogWeight > 20) {
//   console.log(dogName + " says WOOF WOOF");
// } else {
//   console.log(dogName + " says woof woof");
// }

// dogName = "spike";
// dogWeight = 53;
// if (dogWeight > 20) {
//   console.log(dogName + " says WOOF WOOF");
// } else {
//   console.log(dogName + " says woof woof");
// }

// dogName = "lady";
// dogWeight = 17;
// if (dogWeight > 20) {
//   console.log(dogName + " says WOOF WOOF");
// } else {
//   console.log(dogName + " says woof woof");
// }


function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " says WOOF WOOF");
  } else {
    console.log(name + " says woof woof");
  }
}
bark("rover", 23)
bark("spot", 13)
bark("spike", 53)
bark("lady", 17)


//FUNCTION RETURN

// deposit
// const depositAmount = 1000;
// const yearlyRate = 15;
// const depositTermInYears = 2;

// let depositIncome = 0;
// let count = 0;

// while (count < depositTermInYears) {
//   depositIncome = depositIncome + depositAmount * (yearlyRate / 100);
//   count = count + 1
// }

// console.log(depositIncome);


//делаем из вышеуказанного  кода с помощью фунции (это если у нас будет несколько значений)

const depositAmount = 1000;
const yearlyRate = 15;
const depositTermInYears = 2;



function getDepositIncome(amount, rate, term) {
  let count = 0;  
  let depositIncome = 0;

    while (count < term) {
    depositIncome = depositIncome + amount * (rate / 100);
    count = count + 1
  }
  return depositIncome;
}

const depositIncome_1 = getDepositIncome(depositAmount, yearlyRate, depositTermInYears);
const depositIncome_2 = getDepositIncome(1000, 30, 3);
const totalIncome = depositIncome_1 + depositIncome_2;

console.log(totalIncome);

// console.log(depositIncome_2)
