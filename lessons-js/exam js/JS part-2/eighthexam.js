// document.body.innerHTML = `
//   <button id="start-button">Показать сообщение через 3 секунды</button>
//   <button id="cancel-button">Отменить показ сообщения</button>
//   <div id="message-output"></div>
// `

// const startButton = document.getElementById('start-button')
// const cancelButton = document.getElementById('cancel-button')
// const messageOutput = document.getElementById('message-output')

// let timerId

// startButton.addEventListener('click', () => {
//   messageOutput.textContent =
//     'Сообщение появится через 3 секунды...'
//   timerId = setTimeout(() => {
//     messageOutput.textContent = 'Вот и сообщение!'
//   }, 3000)
// })

// cancelButton.addEventListener('click', () => {
//   XXX
//   messageOutput.textContent =
//     'Показ сообщения отменён.'
// })





// document.body.innerHTML = `
//   <button id="addPetButton">Добавь питомца!</button>
//   <div id="petContainer"></div>
// `;

// const pets = ["🐶", "🐱", "🐹", "🐰", "🦜", "🐢", "🐟", "🐸", "🦇", "🕷", "🦔", "🐺"]
// const petContainer = document.getElementById("petContainer")

// document.getElementById("addPetButton").addEventListener('click', () => {
//   const pet = XXX
//   pet.textContent = pets[Math.floor(Math.random() * pets.length)]
//   pet.style.fontSize = '2rem'
//   pet.style.margin = '5px'

//   petContainer.append(pet)
// })







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
