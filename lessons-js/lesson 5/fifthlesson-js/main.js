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




// const car = {
//   make: "Chevy",
//   model: "Bel Air",
//   year: 1957,
//   color: "red",
//   passengers: 2,
//   convertiblr: false,
//   mileage: 1021
// }

// if(car.mileage < 50000) {
//   alert('Покупаем!!!')
// } else {
//   alert('Не покупаем!!!')
// }


// Объекты как параметры функции

const chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertiblr: false,
  mileage: 1021
}

const cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertiblr: false,
  mileage: 12892
}

const fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertiblr: false,
  mileage: 88000
}

// year > 1955
// mileage < 50 000

function prequal(car) {
  // return (car.year > 1955 && car.mileage < 50000) ? true : false -- можно через тернарный
  if(car.year > 1955 && car.mileage < 50000){
    return true
  }
  return false
}
console.log(prequal(fiat));


const fido = {
  name: "Fido",
  weight: 48,
  breed: "Mixed",
  loves: "walks"
}

function loseWeight(dog, amount) {
  dog.weight = dog.weight - amount
}
loseWeight(fido, 5)
console.log(fido); // изменили вес собаки


const superSecretFile = {
  level: 'classified',
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detroit."
}

function getSecret(file, secretPassword) {
  file.opened = file.opened + 1;
  if(secretPassword === file.password){
    return file.contents
  } else {
    return "Invalid password! No secret for ypu."
  }
}

const content = getSecret(superSecretFile, 2)
console.log(content);
console.log(superSecretFile); // opened изменилост на 1

function setSecret(file, secretPassword, secret) {
  if(secretPassword === file.password) {
    file.opened = 0
    file.contents = secret;
  }
}
setSecret(superSecretFile, 2 , "Dr. Evel's next meeting is in Minsk.")
console.log(superSecretFile);


function setPassword(file, currentPassword, newPassword) {
  if(currentPassword === file.password) {
    file.password = newPassword;
  }
}
setPassword(superSecretFile, 2, 5)
console.log(getSecret(superSecretFile, 5));



