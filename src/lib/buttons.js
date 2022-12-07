

/**
 * 
 * Create a one-time click button. Once clicked, this button will never appear
 * again on subsequent refreshes of the same node. Options argument is
 * identical to the btn function.
 * 
 * once({"Click me!": () => console.log("Clicked.")})
 * 
 * The above uses a function callback, but a string could also
 * be used just to display a quick message on screen.
 * 
 * @param {Object} options Options to create button with.
 */
const once = (options) => {
  let label = Object.keys(options)[0]
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
      if (typeof options[label] === 'function') {
        options[label]()
      } else {
        msg(options[label])
      }
    }
    btn(obj)
  }
}

const style = `

button {
  border-radius: 0.25em;
  border: 1px solid transparent;
  padding: 0.6em;
  width: 100%;
  max-width: 100%;
  background-color: #1a1a1a;
  cursor: pointer;
  display: flex;
  text-indent: 0px;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

`

const newStyle=`
  border-radius: 0.25em;
  border: 1px solid transparent;
  padding: 0.6em;
  width: 100%;
  max-width: 100%;
  background-color: #1a1a1a;
  cursor: pointer;
  display: flex;
  text-indent: 0px;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  transition: border-color 0.25s;
`

/**
 * 
 * Create a new screen button. Buttons are added in the order that they are received.
 * Typical usage looks like:
 * 
 * btn({"Click me!": () => console.log("Clicked.")})
 * 
 * The above uses a function callback, but a string could also
 * be used just to display a quick message on screen.
 * 
 * @param {Object} options Options to create button with. 
 */
const btn = (options) => {

  // prepare to create button
  const e = document.getElementById("btns")
  let label = ''
  let callback = null
  const reserved = ['unshift']

  // clear screen function - will be called after button is pressed
  const clearScreen = () => {
    const e = document.getElementsByClassName('main')[0]
    e.remove()
    window.scrollTo(0, 0)
    g$.buttonCount = 0
  }

  // only validate button if options object is correct
  if (typeof options === 'object') {
    label = Object.keys(options).filter(x => reserved.indexOf(x) === -1)[0]
    callback = options[label]
  }

  // if we're good to go, begin button creation
  if (e && label && callback) {

    // button count may not exist, create it if it's not there
    if (!g$.buttonCount) {
      g$.buttonCount = 0
    }

    // Add to screen button count and clean label
    g$.buttonCount += 1
    label = label.trim()

    // create html button element and add click event callback
    const b = document.createElement("button")
    b.type = "button"
    b.onclick = () => {

      // we'll need to hang onto the current html contents, then clear screen
      const buffer = document.getElementsByClassName('main')[0].innerHTML
      clearScreen()

      // do some character cleanup
      if (g$.isTalking) {
        const state = c$?.state ?? "talk"
        const count = c$[state][`btn-${label}`] ?? 0
        g$.lastButtonPressed = label
        c$[state][`btn-${label}`] = count + 1
      }

      // add outgoing page animation
      const outPage = document.createElement('div')
      outPage.className = 'outPage'
      outPage.innerHTML = buffer
      document.body.appendChild(outPage)

      // halfway through animation, clear the outgoing page and begin the
      // new page transition in
      setTimeout(() => {

        // remove outgoing page
        const e = document.getElementsByClassName('outPage')[0]
        e.remove()

        // create elements of new page
        const main = document.createElement('div')
        main.className = 'main'
        const page = document.createElement('div')
        page.className = 'page'
        page.id = 'page'
        const btns = document.createElement('btns')
        btns.className = 'btns'
        btns.id = 'btns'

        // add elements to active DOM
        document.body.appendChild(main)
        main.appendChild(page)
        main.appendChild(btns)

        // determine how to handle button effect
        // if string then pass to the msg function
        if (typeof callback === 'function') {
          callback()
        } else {
          msg(callback)
        }

        // handle the env effects
        if (g$.env) {
          if (g$.isTalking || !g$.buttonCount) {
            msg(g$.env())
          }
        }

        // if there are no buttons, and we have a valid last node to fall back on,
        // show the standard advance button
        if (!g$.buttonCount && g$.lastNode) {
          btn({"➜": () => {
            if (g$.lastNode) {
              g$.lastNode()
            }
          }})
        }
      }, 450)
    }

    // finalize new button and determine where to add it respective to other buttons
    b.className = "button"
    b.innerHTML = `<div class='buttonText'>${skylight(label, true)}</div>`
    const unshift = options.unshift
    if (!unshift) {
      e.appendChild(b)
    } else {
      e.prepend(b)
    }

  } else {
    throw `Button could not be constructed! With options: ${options}`
  }
}
