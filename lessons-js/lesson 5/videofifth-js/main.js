// const propName = "student-name"

// const student = {   // СОЗДАНИЕ ОБЪЕКТА
//   [propName]: "Bob", // можем обращаться к переменной
//   lastName: "Ivanov", //если несколько слов, то в кавычки в консоль []
//   age:  34,
//   scores: 89,
//   happiness: 30,
//   isMArried: true
// }
// // console.log(student);

// const st = []

// for (const key in student) {
//   st.push(student[key])
// }


// CRUD - ВСЕ ЧТО МЫ ДЕЛАЕМ С ОПЕРАЦИЯМИ 



const pet = {  // создание объекта
  name: 'Strider',
  happiness: 50,
  hunger: 50,
  sayHi: function() {console.log("Meow!!!");}, 
  // sayHi() {console.log('Meow!')}, // функцию можно указать таким образом
}

pet.sayHi()


pet.happiness = 60 // изменяем данные в свойстве

pet.isCat = true // создаем новое своейство в объекте

delete pet.isCat // удаляем свойсвто в объекте

// console.log(pet);

function playWithPet(anyPet) {
  anyPet.happiness += 10
  
}

// playWithPet(pet);
// console.log(pet);


const pet1 = {
  name: 'Strider',
  character: { // объект в объектк
    kindness: 75,
  },
}

const pet2 = {
  name: 'Strider',
  character: pet1.character, // может обращаться к другому объект один характер (если хоти именно kindness то нужно новый объект)
} 

pet2.character.kindness = 100

// pet2.character = {kindness: 100} // поменяем именно у pet2  создаем как внутри новый объект

// console.log(pet1.character.kindness);
// console.log(pet2.character.kindness);



const pet3 = {
  name: 'Strider',
  happiness: 50,
  hunger: 50,
  health: {
    hygiene: 75,
    energy: 50,
    dental: 100,
    coat: 30,

  },
}

function generateHealthReport (anyPet) {
    console.log(`Отчет о здоровье ${anyPet.name}:`)
    const health = anyPet.health

    for (const key in health) { // с помощью for in  мы все это перечислем
      console.log(`${key}: ${health[key]}`) // берем ключ из объекта и затем значения
    }
}

console.log(generateHealthReport(pet3));


function checkPetStatus(){
  console.log(`Счастье: ${this.happiness}, голод: ${this.hunger}`)
  
}

const pet4 = {
  name: 'Strider',
  happiness: 50,
  hunger: 50,
  checkStatus: checkPetStatus,
  // checkStatus: function (){
  //   console.log(`Счастье: ${pet4.happiness}, голод: ${pet4.hunger}`)
  // }
}


const pet5 = {
  name: 'Defer',
  happiness: 30,
  hunger: 80,
  checkStatus: checkPetStatus,
  // checkStatus: function (){
  //   console.log(`Счастье: ${pet5.happiness}, голод: ${pet5.hunger}`)
  // }
}


const pet6 = {
  name: 'Puupy',
  happiness: 10,
  hunger: 28,
  checkStatus: checkPetStatus,
}

pet4.checkStatus()
pet5.checkStatus()
pet6.checkStatus()