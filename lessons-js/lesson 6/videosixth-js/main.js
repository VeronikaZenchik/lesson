window.addEventListener("load", function () { //запустить после загрузки старницы, если мы добавим скрипт в хэд
  

const title = document.getElementById("course-title") // поиск в документе по id, если единичный элемент
console.log(title);

const button = document.querySelector("#color-button") // поиск по id, возвращает первый найденый
console.log(button)

const list = document.querySelector(".list") // поиск по class

const items = document.querySelectorAll(".list") // все элементы этого списка
console.log(items); //коллекция (псевдомассив) может только цикл


const domItem = document.querySelector('#dom')
domItem.innerHTML = '<a href="https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model/Introduction">Взаимодействие с DOM ⬅</a>'

title.textContent = 'Обновленное содержание курса 📘'

const a = document.createElement("a") // создание html элемента
console.log(a)

a.setAttribute("href","https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model/Introduction")

domItem.append(a) //добавить

button.setAttribute("title", "Сгенерировать случайные цвта")
console.log(button.getAttribute("title"))//запрошенный атрибут элемента

title.setAttribute("class", "title") //добавляем класс

title.classList.remove("title") // удаляем класс

domItem.classList.add("current")

button.style.padding = "5px 10px"
button.style.color = "gray"
button.style.backgroundColor = "lightblue"

// button.onclick = function() {
//   alert("Click")
// }

button.addEventListener("click", function(){
  const items = document.querySelectorAll(".item")
  for (let i = 0; i < items.length; i++) {
    items[i].style.color =  getRandomColor()
  }
})


function getRandomColor() {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  const randomColor = `rgb(${red}, ${green}, ${blue})`
  return randomColor
}
})