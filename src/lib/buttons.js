let lastButtonPressed = false
let lastLabel = ''
let buttonCount = 0

/**
 * Displays a one-time button. After button is pressed, it will never show again this game.
 * @param {string} label Label for button.
 * @param {function} callback Callback to execute on press.
 * @param {boolean?} [unshift] If unshift value is set to true, button will be added to top of list instead of appended.
 */
const once = (btnObj, unshift) => {
  let label = Object.keys(btnObj)[0]
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
    const obj = {}
    obj[label] = () => {
      g$[id] = true
      if (typeof btnObj[label] === 'function') {
        btnObj[label]()
      } else {
        msg(btnObj[label])
      }
    }
    btn(obj, unshift)
  }
}


/**
 * @function
 * @ignore
 */
const btn = (btnObj, unshift) => {
  const e = document.getElementById("btns")
  let label = ''
  let callback = null
  if (typeof btnObj === 'object') {
    label = Object.keys(btnObj)[0]
    callback = btnObj[label]
  }
  if (e && label && callback) {
    buttonCount += 1
    label = label.trim()
    const b = document.createElement("button")
    b.onclick = () => {
      const buffer = document.getElementsByClassName('main')[0].innerHTML
      clearScreen()
      backButtonHidden = true
      lastButtonPressed = label
      if (g$.isTalking) {
        const state = c$?.state ?? "talk"
        const count = c$[state][`btn-${label}`] ?? 0
        c$[state][`btn-${label}`] = count + 1
      }
      const outPage = document.createElement('div')
      outPage.className = 'outPage'
      outPage.innerHTML = buffer
      document.body.appendChild(outPage)
      setTimeout(() => {
        const e = document.getElementsByClassName('outPage')[0]
        e.remove()
        const main = document.createElement('div')
        main.className = 'main'
        const page = document.createElement('div')
        page.className = 'page'
        page.id = 'page'
        const btns = document.createElement('btns')
        btns.className = 'btns'
        btns.id = 'btns'
        document.body.appendChild(main)
        main.appendChild(page)
        main.appendChild(btns)
        if (typeof callback === 'function') {
          callback()
        } else {
          msg(callback)
        }
        if (buttonCount === 0) {
          backButtonHidden = false
        }
        if (!backButtonHidden && lastNode) {
          btn({"➜": () => {
            if (lastNode) {
              lastNode()
            }
          }})
        }
      }, 490)
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

