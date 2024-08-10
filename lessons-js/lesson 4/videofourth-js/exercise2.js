// Функция removeElement

// Напишите функцию removeElement, которая принимает массив и элемент, а затем возвращает новый массив без указанного элемента. Для перебора элементов используйте цикл for.

// Входные данные:
// array: Массив, из которого нужно удалить элемент. Массив может содержать любые типы данных.
// element: Элемент, который нужно удалить из массива.

// Выходные данные:
// Новый массив, который не содержит указанный элемент.

const array = ["Пиво", "Мороженко", "Молоко", "Кефирчик"]
array[3] = "Хлеб"

array.slice(2, 2, "Кофе", "Чай")

function removeElement(array, element) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== element) {
      result.push(array[i] )
    }
  }
  return result
}
alert(removeElement(array, "Чай"))