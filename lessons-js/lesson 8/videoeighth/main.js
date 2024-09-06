const fullButton = document.querySelector('.fullButton')
fullButton.addEventListener('click', () =>{
console.log('hello');

})

const foo = () => {
  const item = document.querySelectorAll('.item')
  
  const newArr =[...item] // делаем массив из нашего объекта
  
  newArr.forEach(el=> {
    // debugger
    return (
      el.addEventListener('click', () => {
        el.classList.toggle('done')
      })
    )
  })
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
}

foo()


