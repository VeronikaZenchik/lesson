// Массив - набор однородных значений

// 0 => 60
// 1 => 50
// 2 => 60
// 3 => 58
// 4 => 54
// 5 => 54
// 6 => 58
// 7 => 50
// 8 => 52
// 9 => 55

// const scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54]; // квадратные скобки создание массива

// console.log(scores[2]); //указываем индекс массива


// const pets = ["dog", "cat", "rat"];
// console.log(pets[2]);
// console.log(pets[3]); // undefined

// console.log(pets.length); // длина массива

// pets[2] = "parrot";
// console.log(pets);


// отчет по мыльным пузырям

const scores = [60, 50, 60, 58, 54, 54,
  58, 50, 52, 54, 48, 69,
  34, 55, 54, 52, 44, 51,
  69, 64, 66, 55, 52, 61,
  46, 31, 57, 52, 44, 18,
  41, 53, 55, 61, 51, 44];

  const costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .25,
    .25, .25, .27, .25, .26, .29]

  // Buble solution #0 score: 60
  // Buble solution #1 score: 50
  // Buble solution #2 score: 60
  // Buble tests: 36
  // Highest bubble score: 69
  // Solutions with highest score: #11, #18
  // Bubble Solution #11 is the most cost effective


  function printAndGetHighcores(array) {
    let output;
    let highScore = 0;
    for(let i = 0; i < array.length; i++) {
      output =  "Buble solution #" + i + "score: " + array[i];
      console.log(output);
      if(highScore < array[i]) {
        highScore = array[i];
      }
    }
    return highScore
  }

  function getBestScores(array, maxValue) {
    const bestSolutions = [];
  
    for(let i = 0; i < array.length; i++) {
      if(array[i] === maxValue) {
        bestSolutions.push(i)
      }
    }
    return bestSolutions
  }

  function getMostCostEffectiveSolution(resultArray, costArray, maxValue) {
    let index;
    const bestSolutions = getBestScores(resultArray, maxValue)
    if(costArray[bestSolutions[0]] < costArray[bestSolutions[1]]) {
      index = bestSolutions[0]
        } else {
          index = bestSolutions[1]
        }
    return index
  }


  // print scores and get high score
  const highScore = printAndGetHighcores(scores);
  console.log("Buble tests: " + scores.length);
  console.log("Highest bubble score: " + highScore);
  

  // get best scores
  const bestSolutions = getBestScores(scores, highScore)
  console.log("Solutions with highest score: " + bestSolutions);
  
  // get most cost effective solution
  const mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore)
  console.log("Bubble solution #" + mostCostEffective +  " is the most cost effective");
  



