let backButtonHidden = false

/**
 * Displays a one-time button. After button is pressed, it will never show again this game.
 * @param {string} label Label for button.
 * @param {function} callback Callback to execute on press.
 * @param {boolean?} [unshift] If unshift value is set to true, button will be added to top of list instead of appended.
 */
const b1$ = (label, callback, unshift) => {
  function stringToHash() {
    var hash = 0
    if (label.length == 0) {
      return hash
    }
    for (i = 0; i < label.length; i++) {
      char = label.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash
    }
    return hash
  }

  const id = `d${stringToHash()}`

  if (!g$[id]) {
    b$(label, () => {
      g$[id] = true
      p$(callback)
    }, unshift)
  }
}

/**
 * Displays a button.
 * @param {string} label Label for button.
 * @param {function} callback Callback to execute on press.
 * @param {boolean} [unshift] Optional. If unshift value is set to true, button will be added to top of list instead of appended.
 */
const b$ = (label, callback, unshift) => {
  const e = document.getElementById("card")
  if (e && label && callback) {
    label = label.trim()
    const b = document.createElement("button")
    b.onclick = () => {
      clearScreen()
      backButtonHidden = true
      window.scrollTo(0, 0)
      if (typeof callback === 'string') {
        p$(callback)
      } else {
        callback()
      }
      if (document.getElementById("card").innerHTML === "") {
        backButtonHidden = false
      }
      if (!backButtonHidden && lastNode) {
        b$("OK", () => {
          if (lastNode) {
            lastNode()
          }
        })
      }
    }
    b.className = "button"
    b.innerHTML = `<div class='buttonText'>${skylight(label, true)}</div>`
    if (!unshift) {
      e.appendChild(b)
    } else {
      e.prepend(b)
    }
  }
}

