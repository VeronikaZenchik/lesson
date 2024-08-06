// Вопрос:
// Функция greet должна принимать имя пользователя и привествовать его, например: ‘Привет, Макс!’. 
// Если имя не передано, функция должны выводить: ‘Привет, гость!’. 
// Что нужно добавить вместо XXX, чтобы функция корректно работала?


function greet(XXX) {
  const message = `Привет, ${name}!`
}



// Твой ответ:
// name



// Вопрос:
// Что нужно написать вместо XXX, чтобы получить в консоли строку 'Сообщение дня: Привет, Аня!'. 
// В ответе должна быть использована функция getWelcomeMessage


// const message = `Сообщение дня: XXX`
// console.log(message)
// function getWelcomeMessage(name) {
//   return `Привет, ${name}!`
// }

// const message = `Сообщение дня: ${getWelcomeMessage("Аня")}`
// console.log(message)
// function getWelcomeMessage(name) {
//   return `Привет, ${name}!`
// }

// Твой ответ:!!!!
// ${getWelcomeMessage("Аня")}

// Вопрос:
// В данном коде допущена ошибка (ожидается, что в переменную sum будет записана сумма чисел, переданных в функцию addNumbers).
// Необходимо добавить строку кода. Укажие эту строку кода в ответе


function addNumbers(a, b) {
  let result = a + b
  return result
}
const sum = addNumbers(100, 20)

// ответ: !!!!
return result

