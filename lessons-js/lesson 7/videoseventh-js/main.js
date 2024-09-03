typeof "hello" // 'string'
typeof 42 // 'number'
typeof {} // 'object'
typeof [] // 'object'
typeof function() {} // 'function' (хотя функция тоже объект)

const a = 'hello'
console.log(typeof a);




// const нельзя перезаписать и если ей не задать значение она будет подчеркиваться красным
// let  если мы не зададим значени будет undefined


// undefined

let c
let b = 100200


const foo = (val) => {
  if (val === undefined) {
    console.log('var is undefined');
  } else {
    console.log('var is defined');
  }
}
foo(c)
foo(b)


let d = null
console.log(typeof d);


let y = 5
let x = '5'
let s = a + b // создаем переменную чтоб понять какой тип в нашем выражении
console.log(typeof c);
console.log(5 + '5');


//Строгое и нестрогое сравнение

const f = 5;
const g = '5'

console.log(f == g); // true
console.log(f === g); // false

// === - перве два равно сравнивают значения, а третье раввно он сравнивает тип значения!

// Нестрогое сравнение (==)

console.log(null == undefined); //true при нестрогом сравнении

let obj1 = {name: 'Alice'}
let obj2 = {name: 'Alice'}

console.log(obj1 == obj2); // false

// в ссылочном типк данном сравнивает ссылки, также и с массивами


let obj3 = {name: 'Alice'}
let obj4 = obj3

console.log(obj3 == obj4);  //true



console.log('5' > 3); //true // браузер преобразовывает строчку в число


const sum = 2 + '2' //22 произойдет контетанация

const multifly = 3 * '4'
console.log(multifly); // 12

// если умножть делить, то переводит в число


// Slice 
// Назначение: извлекает часть массива и возращает новый массив
// Изменяет оригинальный массив: нет, slice не изменяет исходный массив
// Аргументы:
// start: начальный индекс (включительно)
// end: конечный индекс (не включая)

const array4 = [1, 2, 3, 4, 5];
const sliced = array4.slice(1,4)
console.log(sliced); //2,3,4


// Splice
// Назначение: изменяет содержимое массива, удаляя или добавляя элементы,изменят старый массив
// Изменяет оригинальный массив: да, splice изменяет исходный массив
// Аргументы:
// start: начальный индекс для изменения
//deleteCount: количество элементов лоя удаления
//items: элементы для добавления (необязательно)

// Если мы хотиим посмотреть какие изменения он внес то проверяем старый массив, а если что именно выбросил splice


const array3 = [1, 2, 3, 4, 5];
const spliced = array4.splice(1,2,'a', 'b')
console.log(array3); // 1, 'a', 'b', 4. 5
console.log(spliced); // 2, 3 // показал что удалил


