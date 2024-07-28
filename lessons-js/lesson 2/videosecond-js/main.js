let userChoice;             //для хранения выбора пользователя
let computerChoice;         //для хранения выбора компьютера
let isWinner = false;       // поможет нам определить, когда игра должна закончиться


while (!isWinner) {
  userChoice = prompt("Выберите камень, ножницы или бумагу")
  userChoice = userChoice.toLowerCase();
  
  let randomNumber = Math.floor(Math.random() * 3);
  
  if (randomNumber === 0) {
    computerChoice = "камень"
  } else if (randomNumber === 1){
    computerChoice = "ножницы"
  } else if (randomNumber === 2) {
    computerChoice = "бумага"
  }

  if (userChoice === "камень" || 
      userChoice === "ножницы" || 
      userChoice === "бумага") {

        alert('Компьютер выбрал: ' + computerChoice)

    if (computerChoice === userChoice) {
      alert("Ничья, давай ещё разок!")
    } else if ((userChoice === "камень" &&  computerChoice === "ножницы" ||  
              userChoice === "ножницы" && computerChoice === "бумага" ||
              userChoice === "бумага" && computerChoice === "камень")) { //когда выйграл user
      alert("Ты выиграл!")
      isWinner === true
    } else { // победа компа
      alert("Ты проиграл!")
      isWinner === true
    } 
  } else {
    alert("Введите правильное значение: камень, ножницы или бумага")
  }
  
}


