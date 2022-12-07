

/**
 * Callback used if user calls msg with a function.
 *
 * @callback msgCallback
 * @return {string} Returns string to be displayed on screen.
 * 
 */



/**
 * @function msg
 * 
 * Display a paragraph on screen. This is the most common form of output to user.
 * If a string or callback array is passed, the msg function will incrementally print the
 * first element, then the next, and so on, until the last element, which will continue to be
 * printed each time msg is called on that function. Otherwise, a callback returning a string
 * or a string can be passed.
 *  
 * @param {string | msgFunction | Array<string | msgFunction>} element Content to display.
 */
const msg = (element) => {
  // private function to handle array printing in msg
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
      if (value < arr.length - 1) {
        g$[id] = value + 1
      }
    } else {
      g$[id] = 1
      msg(showFirst)
    }
  }

  // handle the rest of msg
  // branch based on input as array, string or function
  const page = document.getElementById("page")
  if (page) {
    if (Array.isArray(element)) {
      incrementPrint(element)
    } else if (typeof element === "string") {
      page.innerHTML += skylight(element)
    } else if (typeof element === "function") {
      page.innerHTML += skylight(element())
    }
  }
}
