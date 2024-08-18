// Вопрос:
// Напишите вместо XXX строку кода, чтобы из массива pets был удалён элемент 'parrot'


// const pets = ['dog', 'cat', 'parrot', 'fish']
// pets.splice(2, 1) // это попробовать!!!
// console.log(pets) // Должно вывести ['dog', 'cat', 'fish']

// Твой ответ:
// array.pets(2, 1,  'parrot')



// Вопрос:
// Функция findElementIndex определяет индекс элемента в массиве или сообщает, что элемент не найден.
// Что нужно написать вместо XXX, чтобы функция работала?


function findElementIndex(array, element) {
  const index = array.indexOf(element);
  if (index === -1) {
    return 'элемент не найден'
  } else {
    return {index
  }
}
}
const technologies = ["HTML", "CSS", "JavaScript"]
console.log(findElementIndex(technologies, "CSS")) // должно вернуть 1
console.log(findElementIndex(technologies, "Node.js")) // должно вернуть 'элемент не найден'


// Твой ответ:
// element



// Вопрос:
// Что нужно написать вместо XXX, чтобы добавить книгу 'Grokking Algorithms' в конец массива books?


// const books = [
//   'Head First JavaScript Programming',
//   'You Don’t Know JS',
//   'JavaScript: The Definitive Guide',
//   'Lord of the Rings',
// ]
// books.push('Grokking Algorithms') // попроьовать этот вариант!!!

// console.log(books);



// Твой ответ:
// books [4] = 'Grokking Algorithms'