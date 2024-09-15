// Вопрос:
// Что нужно написать вместо XXX, чтобы реализовать метод addStudyTime?
// Метод должен увеличивать свойство hoursSpent на количество часов, переданное в качестве аргумента.


const studyTimer = {
  topic: 'Web Development',
  hoursSpent: 0,
  // Метод для добавления времени учебы
  addStudyTime(hours) {
    XXX
  }
}
studyTimer.addStudyTime(5)
console.log(studyTimer);

// Твой ответ:
// studyTimer.hoursSpent = studyTimer.hoursSpent + hours


// Верный ответ:
return this.hoursSpent = this.hoursSpent + hours;