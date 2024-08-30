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

const array = [1, undefined, 3, undefined, 5]

const checkUndefined = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if(array[i] === undefined) {
      count++
    }
  }
  return count
}
console.log(checkUndefined(array));



// Создайте функцию replaceNull, которая принимает объект и заменяет все значения null на строку 'No value'
const object = {
  a: null,
  b: 2,
  c: null
}


const replaceNull = (obj) => {
  for (const key in obj){
    if(obj[key] === null){
      obj[key] = 'No value' 
    }
  }
  return obj
}

console.log(replaceNull(object));


// Создайте функцию checkTypeEquality, которая принимает два значения и возращает true, если их типы равно, и false в противном случае
const first = 5
const second = '5'
const checkTypeEquality = (first1, second2) => {
  return typeof first === typeof second
}
console.log(checkTypeEquality(first, second));


// Напишите функцию isNullOrUndefined, которая принимает одно значение и возращает true, если оно равно null или undefined (используя нестрогое сравнение)

const isNullOrUndefined = (value) => {
  return value == null
}
console.log(isNullOrUndefined(undefined));

// напишите функцию compareNumberAndString, которая принимает число и строку, и возращает true, если они равны при нестрогом сравнении, и false в противном случаеъ

const compareNumberAndString = (num, str) => {
  return num == str ? true: false
}
console.log(compareNumberAndString(15, '15'));

// создайте функцию isReallyNaN, которая принимает значение и возращает true, если оно является NaN. Используйте Number.isNaN()

const isReallyNaN = (value3) => {
  return Number.isNaN(value3)
}
console.log(isReallyNaN(NaN)); //true
console.log(isReallyNaN('NaN')); //false

console.log('0' == false); // true
console.log({} == {}) //false

// Напишите функции numberString, которая принимает число и возращает его строковое представление

const numberString = (number) => {
  return String(number)
}
console.log(numberString(15));


// Создайе функцию checkTruthyFalsy, которая принимает значения и выводит в консоль, является ли оно псевдоистинным (truthy) или псевдоложным (falsy). Используйте условные операторы для проверки

const checkTruthyFalsy = (value4) => {
  if(value4){
    console.log('Значение является псевдоистинным');
  } else {
    console.log('Значение является псевдоложным');
  }
}

// Напишите функцию convertArrayToUpperCase, которая принимает массив строк и возращает новый массив, где все строки преобразованы в верхний регистр
const arrayUpper = ["hello", "world"]

const convertArrayToUpperCase = (array) => {
  return array.map(el=>el.toUpperCase())

}
console.log(convertArrayToUpperCase(arrayUpper));
console.log(arrayUpper.length);


// Напишите функции findCharacterindex, которая принимает строку и символ, и возращает индекс первого вхождения этого символа в строку. 




