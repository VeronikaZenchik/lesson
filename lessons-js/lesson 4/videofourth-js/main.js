const scores = [23, 45, 56, 78, 91, 54, 84, 92]

function calculateAverage(arrayOfScores) {
  let sum = 0;
  for(let i = 0; i < arrayOfScores.length; i++) {
    sum = sum + arrayOfScores[i];
  }

  const result = sum / arrayOfScores.length
  return result
}

const average = calculateAverage(scores)
console.log(`Средний балл студента: ${average}`) 


function classifyScores(arrayOfScores) {
  const classifiedScores = []
  for (let i = 0; i < arrayOfScores.length; i++) {
    let grade;
    if(arrayOfScores[i] >= 90) {
      grade = 'A';
    } else if(arrayOfScores[i] >= 80) {
      grade = 'B';
    } else if(arrayOfScores[i] >= 70) {
      grade = 'C';
    } else if(arrayOfScores[i] >= 50) {
      grade = 'D';
    } else {
      grade= 'F'
    }
      classifiedScores.push(grade)
  }

  return classifiedScores
}
console.log(classifyScores(scores))