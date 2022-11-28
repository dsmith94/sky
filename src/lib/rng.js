// fisher-yates shuffle
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}


const roll = (odds) => {
    return (odds >= Math.floor(Math.random() * 100))
}


const countdown = (arr) => {
    return (arr.length > 1) ? arr.pop() : arr[0]
}


const pick = (arr) => {
  const newArr = [...arr]
  const shuffled = shuffle(newArr)
  return shuffled[0]
}
