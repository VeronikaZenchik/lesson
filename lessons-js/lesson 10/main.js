const MOCK_TASKS = [
  { id: 1, title: 'Изучить паттерн MVC', isDone: false },   // пример данных для тестирования
  { id: 2, title: 'Подготовить моковые данные', isDone: true },
]

// хранение данных, бизнес-логика
const model = {
  tasks: [],
  addTask(title) {
    // const isDone = false
    // const id = Math.random()

    const newTask = { title: title, isDone: false, id: Math.random() }
    // то же, что { title: title, isDone: isDone, id: id }

    this.tasks.push(newTask)

    view.renderTasks(model.tasks) // Обновляем представление
  },

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId)

    view.renderTasks(model.tasks)
  },

  toggleTask(taskId) {
    // воспользуемся методом map
    this.tasks = this.tasks.map((task) => {
      if (task.id === taskId) {
        task.isDone = !task.isDone
      }
      return task
    })

    view.renderTasks(model.tasks) // Обновляем представление
  },
  clearTasks(){
    this.tasks = this.tasks.filter((task) => task.isDone !== true)

    view.renderTasks(model.tasks)
  },
}

// отображение данных: рендер списка задач, размещение обработчиков событий
const view = {
  init(){ // инициализируем представление
    // 1 вариант как можем обратиться
    // const tasks = controller.getTasks()
    // this.renderTasks(tasks)
    // 2 вариант как можем обратиться
    this.renderTasks(model.tasks) 

    const form = document.querySelector('.form')
    const input = document.querySelector('.input')

    // Добавляем обработчик события на форму
    form.addEventListener('submit', function (event) {
      event.preventDefault() // Предотвращаем стандартное поведение формы
      const title = input.value
      controller.addTask(title) // Вызываем метод addTask контроллера
  
      input.value = '' // Очищаем поле ввода // `value` — это свойство элемента `input`, которое содержит текст, введённый пользователем в это поле.
    })

    const list = document.querySelector('.list')

    list.addEventListener('click', function (event) {
      // проверяем, что кликнули на название задачи
      if (event.target.classList.contains('task-title')) {
        // id задачи хранится в id родительского элемента
        // +, используем унарный плюс для преобразования типа в number
        const taskId = +event.target.parentElement.id
        controller.toggleTask(taskId)
      }

     // 1. проверяем, что клик был по кнопке удаления
    if (event.target.classList.contains('delete-button')) {
      const taskId = +event.target.parentElement.id
      // 2. вызываем метод контроллера для удаления задачи
      controller.deleteTask(taskId)
    }
  })
  const clearButton = document.querySelector('.clear')
  clearButton.addEventListener('click', function (event) {
    controller.clearTasks()
  })
},

  renderTasks(tasks){
    const list = document.querySelector('.list') // ищем нашу ул
    let tasksHTML = '' 
    for (let i = 0; i < tasks.length; i++) { // проходимся по массиву
      const task = tasks[i]
      tasksHTML = tasksHTML + `
        <li id="${task.id}" class="${task.isDone ? 'done' : ''}">
          <b class="task-title">${task.title}</b>
          <button class="delete-button" type="button">Удалить 🗑</button>
        </li>
      `
      list.innerHTML = tasksHTML
    }
  }
}

// обработка действий пользователя, обновление модели
const controller = {
  // getTasks(){
  //   return model.tasks
  // },
  addTask(title){
 // Проверяем, что строка не пустая
  if (title.trim() !== '') {
  model.addTask(title)
}
  },

  deleteTask(taskId) {
    model.deleteTask(taskId)
  },

  toggleTask(taskId) {
    model.toggleTask(taskId)
  },
  clearTasks(){
    model.clearTasks()
  },
}


function viewDefault() {
  view.init()
}
viewDefault()