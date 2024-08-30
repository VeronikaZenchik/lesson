// Напишите функцию checkType, которая принимает один аргумент и возвращает его тип данных, используйте typeof внутри функции

const checkType = (argument) => {
  return typeof argument
}
console.log(checkType(12345));

// Возьми объект person и фунцию. Необходимо проконсолить через forin все типы которые лежат в ключах

const person = {
  name: 'Alice',
  age: 30,
  isEmployed: true
}
function logPersonTypes(person) {
  for(key in person){
    console.log(typeof person[key])
  }
}
logPersonTypes(person)



// переписываем на стрелочную функцию

// const logPersonTypes = (person) => {
//   for(key in person){
//     console.log(typeof person[key])
//   }
// }


// Напишите функцию isString, которая принимает один аргумент и возращает true, если тип аргумента - строка, и false в противном случае

const isString = (argum) => {
  return typeof argum==='string'
}
console.log(isString('123'));
console.log(isString(123));



// Используйте цикл, чтобы пройтись по массиыву и вывести тип каждого элемента

const arr = ['apple', 'orange', 100200, true, 200100300]

const arrFoo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
  console.log(typeof arr[i])
  }
}
(arrFoo(arr));


// напишите функцию checkUndefined, которая принимает массив и возращает количество элементов, равных undefined
