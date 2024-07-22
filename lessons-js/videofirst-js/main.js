const INITIAL_ENERGY = 10;
const MIN_ENERGY_LEVEL = 0;
const LOW_ENERGY_THRESHOLD = 3;


let energy = INITIAL_ENERGY;

while (energy >= MIN_ENERGY_LEVEL) {
  console.log("Energy " + energy);
  if (energy === MIN_ENERGY_LEVEL) {
    console.log("Нужна подзарядка");
  } else if(energy <= LOW_ENERGY_THRESHOLD) {
    console.log("Силы заканчиваются!");
  } else {
    console.log("Работаем дальше!");
  }
  energy = energy - 1;
  }

  console.log("Робот отдыхает");