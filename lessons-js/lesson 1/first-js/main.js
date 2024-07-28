      let sum = +prompt("Укажите стартовую сумму", 1000); //когда мы не знаем какой срок депозита
      const persent = 15;
      const result = 2000;

      let count = 0;

      const depositTerm = +prompt("Укажите срок депозита", 10);

      while (count < depositTerm) {
        sum = sum + sum * (persent / 100);
        count = count + 1;
        document.write(count + ": " + sum + "<br>")
      }