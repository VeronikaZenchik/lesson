// Вопрос:
// Что нужно написать вместо XXX, чтобы метод getBatteryLevel возвращал уровень заряда объекта robot?


const robot = {
  name: "TaskBot",
  batteryLevel: 100,
  getBatteryLevel() {
    xxx
  }
}
robot.getBatteryLevel()  // Возвращает текущий уровень заряда
console.log(robot);


// Твой ответ:
// robot.batteryLevel

return this.batteryLevel !!!!!!


// Вопрос:
// Что нужно написать вместо XXX, чтобы перебрать все свойства объекта library и вывести информацию о каждом жанре?


// const library = {
//   fantasy: 300,
//   scienceFiction: 150,
//   mystery: 200,
//   nonFiction: 90
// }
// for (XXX) {
//   console.log(`${genre}: ${library[genre]} книг`)
// }


// Твой ответ:
// let key in library

// let genre in library!!!!!!


// Вопрос:
// Что нужно написать вместо XXX, чтобы реализовать метод addStudyTime?
// Метод должен увеличивать свойство hoursSpent на количество часов, переданное в качестве аргумента.


// const studyTimer = {
//   topic: 'Web Development',
//   hoursSpent: 0,
//   // Метод для добавления времени учебы
//   addStudyTime(hours) {
//      xxx
//    }
   
//   }
//   studyTimer.addStudyTime(10)
//   console.log(studyTimer);
  


// Твой ответ:
// studyTimer.hoursSpent += hours


// this.hoursSpent += hours !!!!!!