// const fullButton = document.querySelector('.fullButton')
// fullButton.addEventListener('click', () =>{
// console.log('hello');
// foo()
// })

// const foo = () => {
//   const item = document.querySelectorAll('.item')
  
//   const newArr =[...item] // делаем массив из нашего объекта
  
//   newArr.forEach(el=> {
//     // debugger
//     return (
//       el.addEventListener('click', () => {
//         el.classList.toggle('done')
//       })
//     )
//   })

  // FOREACH не создает новый, он изменяет старый 
  
  // OR
  
  // newArr.map(el=> {
  //   // debugger
  //   return (
  //     el.addEventListener('click', () => {
  //       el.classList.toggle('done')
  //     })
  //   )
  // })
  
  // MAP создает новый массив
  
  // OR
  
  // for (let i = 0; i < item.length; i++) {
  //   item[i].addEventListener('click', () => {
  //     item[i].classList.toggle('done') //на нашем айтоме появится щелкалка и она будет сделана
  //   })
  // }



    const list = document.querySelector('.list')
    const item = document.querySelectorAll('.item')
    const newArr = [...item]
    const resetButton = document.querySelector('#reset-button')

    let timeoutId = null // Хранение идентификатора таймера
    let isTimerStarted = false // Флаг, указывающий на то, запущен ли таймер

    resetButton.addEventListener('click', () => {
      if(!isTimerStarted){
        isTimerStarted = true
        resetButton.textContent = 'Отмена'
        timeoutId = setTimeout(()=> {
          // newArr.forEach((el) => {
          //   return(
          //     el.classList.remove('done')
          //   )
          // })
          for (let i = 0; i < item.length; i++) {
            item[i].classList.remove('done')
          }
          resetButton.textContent = 'Сброс'
          isTimerStarted = false
        }, 3000)
      } else {
        clearTimeout(timeoutId) // все вырубится/затушится, для этого и создали переменную
        resetButton.textContent = 'Сброс'
        isTimerStarted = false
      }

    })


    // Делегируем обработку кликов на уровне списка
    list.addEventListener('click',  (event) => {
      const targetElement = event.target

      // Проверяем, был ли клик совершен по элементу списка (li с классом 'item')
      if (targetElement.classList.contains('item')) {
        targetElement.classList.toggle('done')
      }
    })
        
      // newArr.forEach(el=> { //переберали наши айтамы, список элементов - пройдёмся по нему циклом и добавим обработчик клика на каждый элемент.
      // // debugger
      // return (
      //   el.addEventListener('click', () => {
      //       el.classList.toggle('done')
      //     })
      //   )
        // })



const form = document.querySelector('.form')
form.addEventListener('submit', (event) =>{ //нашу форму поюключили, сабмит-отправка и коллбэк

  event.preventDefault() // не позволит раньше времени перезагрузить страницу, взяли из собтия, типо не спеши
  const input = document.querySelector('.input')

  let text = input.value // взяли мы его значение
  
  const list = document.querySelector('.list')
  const newLi = document.createElement('li') // создаем новую лишку куда будет класть 
  newLi.classList.add('item') // в нашу лишку добавляем класс айтем
  newLi.textContent = text // в ньюли кладем значение, то есть наш текст
  list.append(newLi) // в наш лист кладем нашу лишку

  input.value = '' //чтобы текст зачистился после нашего добавления, подчищаем вэлью
})


// с формами работает самбмит



//..................................................

// код который мы будем бомбить 


// const item = document.querySelectorAll('.item')
// const newArr =[...item]
  
//   newArr.forEach(el=> {
//     // debugger
//     return (
//       el.addEventListener('click', () => {
//         el.classList.toggle('done')
//       })
//     )
//   })

// const form = document.querySelector('.form')
// form.addEventListener('submit', (event) =>{ 
// event.preventDefault() 
// const input = document.querySelector('.input')
// let text = input.value 


// const list = document.querySelector('.list')


// const newTable = document.createElement('table')
// const newTr = document.createElement('tr')
// const newTd = document.createElement('td')
// newTd.textContent = text
// newTr.append(newTd)
// newTable.append(newTr)
// list.append(newTable)


// input.value = '' 
// })


{/* <table>
  <tr>
    <td>
    </td>
  </tr>
</table> */}