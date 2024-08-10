// Функция reverseArray

// Напишите функцию reverseArray, которая принимает массив и возвращает новый массив, элементы которого расположены в обратном порядке. В функции не должны использоваться методы массива, реализуйте её с помощью цикла for.

// Входные данные:
// array: Массив, элементы которого нужно расположить в обратном порядке.

// Выходные данные:
// Массив с элементами в обратном порядке.

// идем по массиву сначала

// function reverseArray(array) {
//   const result = [];
//   const lastIndex = array.length - 1;
//   for (let i = 0; i < array.length; i++) {
//     result[lastIndex - i] = array[i]
//   }
//   return result
// }


// с конца

function reverseArray(array) {
  const result = [];
  const lastIndex = array.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    result.push(array[i])
  }
  return result
}

console.log(reverseArray([1, 2, 3]));

const num = [23, 45, 56, 78, 91, 54, 84, 92]
num.reverse()
console.log(num)