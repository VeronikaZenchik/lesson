
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array [randomIndex]
}


const words1 = ["Мой кот", "Моя собака", "Мой попугай"];
const words2 = ["любит есть", "хочет погрызать", "всегда ищет"];
const words3 = ["морковку", "макароны", "косточку"];
const words4 = ["Мой хомяк", "Моя крыса", "Мой енот"];

function makePrases(param1, param2, param3) {

  // const randomIndex_1 = Math.floor(Math.random() * words1.length);
  // const randomIndex_2 = Math.floor(Math.random() * words1.length);
  // const randomIndex_3 = Math.floor(Math.random() * words1.length);
  // const phrase = words1[randomIndex_1] + " " + words2[randomIndex_2] + " " + words3[randomIndex_3];

  const result = getRandomElement(param1) + " " + getRandomElement(param2) + " " + getRandomElement(param3);
  return result
}

// не создаем лишних переменных
alert(makePrases(words4, words2, words3)); 

// так пишем если хотим где-то еще использовать эту фразу
// const result = makePrases();
// console.log(result);
