
// Вопрос:

// Что необходимо написать вместо XXX, тобы при нажатии на кнопку происходило переключение класса .dark на контейнере? Класс .dark должен удаляться, если от присутствует, иначе класс .dark должен добавляться.


document.body.innerHTML = `
  <div class="container dark">
    <button>toggle color schema</button>
  </div>
`
const container = document.querySelector('.container')
const button = document.querySelector('button')
button.addEventListener('click', () => {
  XXX
})



// Твой ответ:
// container.classList.toggle

// ПРАВИЛЬНЫЙ ОТВЕТ:
// container.classList.toggle('dark')
