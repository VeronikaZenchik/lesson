//   ЗАДАЧА
// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.

// РЕШЕНИЕ:


// 1. Таблица с `id="age-table"`.
let table = document.getElementById('age-table')

// 2. Все label в этой таблице
table.getElementsByTagName('label')


// 3. Первый td в этой таблице
table.querySelector('td')

// 4. Форма с name="search"
document.querySelector('form[name="search"]')

// 5. Первый input в этой форме
form.querySelector('input')

// 6. Последний input в этой форме
let inputs = form.querySelectorAll('input') // найти все input