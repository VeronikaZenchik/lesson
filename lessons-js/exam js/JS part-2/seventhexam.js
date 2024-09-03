// Вопрос:
// Какое значение будет в переменной num после выполнения этого кода?


let num = 0
if (undefined) {
  num = 1
} else if ('') {
  num = 2
} else if (0) {
  num = 3
} else if ({}) {
  num = 4
} else if (false) {
  num = 5
} else {
  num = 6
}


// Твой ответ:
// 3

// Вопрос:
// Что нужно написать вместо XXX, чтобы в isEqual было присвоено true?


isEqual = typeof null === XXX


// Твой ответ:
// undefined


// Вопрос:
// У пользователя есть список интересов, разделенный запятыми. Необходимо преобразовать эту строку в массив. Что нужно написать вместо XXX, чтобы выполнить эту операцию? 


const string = "чтение, программирование, ирландские танцы ☘"
const hobbies = XXX // должна получить ['чтение', 'программирование', 'ирландские танцы ☘']


// Твой ответ:
// string .split(" ")



// Вопрос:
// getExtension - функция, которая принимает полное имя файла в качестве аргумента и возвращает его расширение.
// Что необходимо написать вместо XXX, чтобы она корректно работала?


function getExtension(filename) {
  const dotIndex = filename.lastIndexOf(".") // метод lastIndexOf возвращает индекс последнего вхождения указанного значения
  
  return XXX
}
console.log(getExtension("example.pdf")) // Должно вывести "pdf"
console.log(getExtension("archive.tar.gz")) // Должно вывести "gz"


// Твой ответ:
// filename


const isEqual = typeof [] === XXX

"object"

isEqual = typeof (typeof 1) === XXX

"string"