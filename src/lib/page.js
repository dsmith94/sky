
/**
 * Clear the screen. This should ordinarily never need to be called by the user.
 */
const clearScreen = () => {
  const e = document.getElementsByClassName('main')[0]
  e.remove()
  window.scrollTo(0, 0)
  buttonCount = 0
}

/**
 * Prints a message.
 * @param {string | function(): string} element Message to show. Can be either a string or a callback function retuning a string.
 */
const msg = (element) => {

  const incrementPrint = (arr) => {

    const showFirst = arr[0]

    const stringToHash = () => {
      let hash = 0
      if (showFirst.length == 0) {
        return hash
      }
      for (i = 0; i < showFirst.length; i++) {
        const char = showFirst.charCodeAt(i)
        hash = (hash << 5) - hash + char
        hash = hash & hash
      }
      return hash
    }

    const id = `i${stringToHash()}`

    const value = g$[id] ?? 0
    if (value) {
      msg(arr[value])
      if (value < (arr.length - 1)) {
        g$[id] = value + 1
      }
    } else {
      g$[id] = 1
      msg(showFirst)
    }
  }


  if (Array.isArray(element)) {
    incrementPrint(element)
  } else if (typeof element === "string") {
    document.getElementById("page").innerHTML += skylight(element)
  } else if (typeof element === "function") {
    document.getElementById("page").innerHTML += skylight(element())
  }
}
