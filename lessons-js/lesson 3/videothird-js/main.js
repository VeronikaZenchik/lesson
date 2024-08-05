let gold = 100;

// let buildingName = "Tower";
// let costGold = 30;

// if (gold >= costGold ) {
//   gold = gold - costGold;
//   console.log(`${buildingName}: work complete.`);
// } else {
//   console.log(`${buildingName}: not enough resources.`);
// }

// buildingName = "Blacksmith";
// costGold = 30;

// if (gold >= costGold ) {
//   gold = gold - costGold;
//   console.log(`${buildingName}: work complete.`);
// } else {
//   console.log(`${buildingName}: not enough resources.`);
// }

function createBuilding(buildingName, costGold) {
  const hasEnoughGold = gold >= costGold //false
  if (hasEnoughGold) {
    gold = gold - costGold;
    console.log(`${buildingName}: work complete.`);
  } else {
    console.log(`${buildingName}: not enough resources.`);
  }
}
createBuilding("Tower", 30)
createBuilding("Blacksmith", 120)


function increaseResource(currentValue, increment = 100) {
  const totalValue = currentValue + increment
  return totalValue
}

gold = increaseResource (gold)
alert(gold)

createBuilding("Palace", 300)