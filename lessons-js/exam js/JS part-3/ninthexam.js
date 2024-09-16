// Вопрос:
// Что нужно написать вместо XXX, чтобы в консоль выводилось сообщение вида: "Приглашение №1: Привет, Мистер Вискас! Приходи на вечеринку, будет весело!" для каждого питомца в массиве?


// const pets = [
//   { name: "Мистер Вискас", type: "кот" },
//   { name: "Страйдер", type: "собака" },
//   { name: "Бамбл", type: "жабка" },
//   { name: "Черепаха Ниндзя", type: "черепаха" }
// ]
// console.log("Отправляем приглашения на вечеринку для питомцев!")
// pets.forEach((xxx) => {
//   const invitationNumber = index + 1; // Нумерация начинается с 1
//   const message = `Приглашение №${invitationNumber}: Привет, ${pet.name}! Приходи на вечеринку, будет весело!`
//   console.log(message)
// });
// console.log("Все приглашения отправлены, ждем гостей!")


// Твой ответ:
// pets

// Правильный ответ:
// pet, index


//2
// Вопрос:
// orderFood - функция имитирующая процесс приготовления еды, который занимает некоторое время (1 секунду🙂). 
// Что нужно написать вместо XXX, чтобы через 1 секунду после выполнения данного кода, в консоли отобразилось: “Доставляю ризотто прямо к вашему столу!”


function orderFood(dish, callback) {
  console.log(`Начинаю готовить ${dish}...`)
  setTimeout(() => {
    console.log(`${dish} готово!`)
    xxx
  }, 1000); // Готовим еду 1 секунду
}
function deliverFood(dish) {
  console.log(`Доставляю ${dish} прямо к вашему столу!`)
}
orderFood("пицца", deliverFood)


// Твой ответ:
// deliverFood(dish)

// Правильный ответ:
// callback(dish)



//3
// Вопрос:
// Напиши строку кода вместо XXX, чтобы получить массив всех книг жанра "фэнтези"?


// const library = [
//   { title: "Убийство в Восточном экспрессе", author: "Агата Кристи", genre: "детектив" },
//   { title: "Ведьмак", author: "Анджей Сапковский", genre: "фэнтези" },
//   { title: "Научное мышление", author: "Карл Поппер", genre: "наука" },
//   { title: "Властелин колец", author: "Дж. Р. Р. Толкиен", genre: "фэнтези" },
//   { title: "1984", author: "Джордж Оруэлл", genre: "дистопия" }
// ];
// const fantasyBooks = library.filter((book) => {
//   xxx
// })
// console.log("Фэнтезийные книги в библиотеке:", fantasyBooks)


// Твой ответ:
// return library.genre === "фэнтези"

// Правильный ответ:
// return book.genre === "фэнтези"




//4
// Вопрос:
// Что необходимо написать вместо XXX, чтобы остортировать массив фильмов по рейтингу в порядку убыванания?

const movies = [
  { title: "Назад в будущее", rating: 8.5 },
  { title: "Начало", rating: 8.8 },
  { title: "Матрица", rating: 8.8 },
  { title: "Паразиты", rating: 8.6 },
  { title: "Тёмный рыцарь", rating: 9.0 }
]
const sortedMovies = movies.sort((a, b) => {
  if (xxx) {
    return 1
  } else if (a.rating === b.rating) {
    return 0
  } else {
    return -1
  }
})
console.log("Фильмы, отсортированные по рейтингу:", sortedMovies)

// Твой ответ:
// b.rating - a.rating


// Правильный ответ:
// a.rating < b.rating