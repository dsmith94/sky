
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
 * Prints a one-time message. On the next page load, it will show another message forever afterwards.
 * @param {string | function(): string} showFirst Message to show first, and only once.
 * @param {string | function(): string} showLater Message to show after the first message has been shown, on subsequent page loads.
 */
const p1$ = (showFirst, showLater) => {
  function stringToHash() {
    var hash = 0;
    if (showFirst.length == 0) {
      return hash;
    }
    for (i = 0; i < showFirst.length; i++) {
      char = showFirst.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash;
  }

  const id = `i${stringToHash()}`;

  if (g$[id]) {
    msg(showLater);
  } else {
    g$[id] = true;
    msg(showFirst);
  }
};

/**
 * Prints a message.
 * @param {string | function(): string} element Message to show. Can be either a string or a callback function retuning a string.
 */
const msg = (element) => {
  if (typeof element === "string") {
    document.getElementById("page").innerHTML += skylight(element)
  } else if (typeof element === "function") {
    document.getElementById("page").innerHTML += skylight(element())
  }
}
