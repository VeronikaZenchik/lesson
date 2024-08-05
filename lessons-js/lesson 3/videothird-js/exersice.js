let resource = 'lumber'

manageResources()

function manageResources() {
  let resource = 'crystals'
  if (true) {
    let resource = 'stone'
    console.log(resource) // Вывод 1 - stone
  }
  console.log(resource) // Вывод 2 - crystals
}

console.log(resource) // Вывод 3 - lumber

if (true) {
  resource = 'gold'
  console.log(resource) // Вывод 4 -gold
}
console.log(resource) // Вывод 5 - gold
