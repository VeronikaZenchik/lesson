

// 1
// Function declaration - Объявление функций
// ключевое слово function(используется для объявления функции), имя функции, параметры и тело функции 
// происходит хотстинг

function name1(params) {
  // тело функции
}

// 2
//Function expression - Функциональные выражения
// наша создается функция создается в момент исполнения кода, то есть будет доступнка когда интепритатор дойдет до этой строчки
// не происходит хостинг

const name2 = function (params) {
  // тело функци
}


// 3
// Стрелочная функция 

const name3 = (params) => {
  // тело функци
}


// for (let i = 0; i < books.length; i++) 
// переписываем на while

// let i = 0
// while (i < books.length){
//   i++
// }


// Функция, которая передаётся в качестве аргумента в другую функцию, и затем вызывается в этой другой функции, называется колбэк (callback, функция обратного вызова)

// const processBooks = (books, callback) => {
//   for (let i = 0; i < books.length; i++) {
//     const book = books[i]
//     callback(book)
//   }
// }

const favoriteBooks = [
  {
    id: 1,
    title: 'Head First JavaScript Programming',
    author: 'Eric Freeman',
    price: 29.99,
    genre: 'Programming',
  },
  {
    id: 2,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    price: 39.99,
    genre: 'Programming',
  },
  {
    id: 3,
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    price: 49.99,
    genre: 'Programming',
  },
  {
    id: 4,
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 29.99,
    genre: 'Fantasy',
  },
  {
    id: 5,
    title: 'The Witcher',
    author: 'Andrzej Sapkowski',
    price: 19.99,
    genre: 'Fantasy',
  },
]


const printCheapBooks = (books) => {
  for (let i = 0; i < books.length; i++) {
    const book = books[i]
 
    if (book.price < 30) {
      console.log(`${book.title} - ${book.price}`)
    }
  }
}

printCheapBooks(favoriteBooks)

const processBooks = (books, callback) => {
  for (let i = 0; i < books.length; i++) {
    const book = books[i]

    callback(book)
  }
}
const logAuthor = (book) => {
  console.log(book.author)
}


const logCheapBooks = (book) => {
  if (book.price < 30) {
    console.log(`${book.title} - ${book.price}`)
  }
}
 
// Использование функции processBooks с разными колбэками
processBooks(favoriteBooks, logAuthor) // Выводит авторов всех книг
processBooks(favoriteBooks, logCheapBooks) // Выводит названия и цены дешёвых книг

// forEach - вызывает, переданную в параметре, функцию один раз для каждого элемента (возращает целый элемент)

favoriteBooks.forEach((book) => {
console.log(book.author);
})


// filter -  используется для создания нового массива!!!, содержащего только те элементы из исходного массива, которые удовлетворяют определённому условию, заданному в колбэке.

const programmingBooks = favoriteBooks.filter((book) => {
	return book.genre === 'Programming'
})

// map - преобразует каждый элемент массива с помощью колбэка. Возвращает новый массив, где каждый элемент был преобразован указанной функцией.

const bookTitles = favoriteBooks.map((book) => {
  return book.title
})
// или сокращённо:
// const bookTitles = favoriteBooks.map((book) => book.title)
console.log(bookTitles)


// sort -меняет порядок элементов в исходном массиве, мутирует

const mixedArray = [20, "3", 15, "100", 2, "50"]
// mixedArray.sort()
// console.log(mixedArray);

mixedArray.sort((a,b) => b - a) // по убыванию
console.log(mixedArray);
