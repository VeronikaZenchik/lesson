const dog = {
  name: "Fido",
  weight: 20.2,
  age: 4,
  breed: "mixed",
  activity: "fetch balls"
}

console.log(dog.name);  //выводим в консоль какое-то значение

dog.weight = 24 // меняем в объекте значение

dog.isDog = true //добавляем новый ключ и значение в наш объект

delete dog.activity // удаляем свойство из объекта

console.log(dog);




const car = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertiblr: false,
  mileage: 1021
}

if(car.mileage < 50000) {
  alert('Покупаем!!!')
} else {
  alert('Не покупаем!!!')
}