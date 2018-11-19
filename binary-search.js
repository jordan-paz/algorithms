let binarySearch = (target, array) => {
  let middle = Math.floor(array.length / 2)
  let first = 0
  let last = array.length - 1

  while (array[middle] !== target && first < last) {
    console.log('middle = ' + middle)
    if (array[middle] > target) {
      last = middle - 1
    }
    else {
      first = middle + 1
    }
    middle = Math.floor((first + last) / 2)
  }
  return (array[middle] == target) ? middle : -1
}

let dictionary = [
  'abc',
  'albatross',
  'bear',
  'dictionary',
  'elephant',
  'gyro',
  'harmonica',
  'jordan'
]

console.log(binarySearch('albatross', dictionary))

let getFish = (tank, color) => tank.find(fish => fish.color == color)

const tank = [
  {name: 'spot', color: 'white-spotted'},
  {name: 'stripey', color: 'white-striped'},
  {name: 'pikachu', color: 'yellow'},
  {name: 'magikarp', color: 'orange'},
  {name: 'gyarados', color: 'blue'}
]

console.log(getFish(tank, 'white-spotted'));
