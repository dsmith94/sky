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
  const id = `d${stringToHash(label)}`

  if (!g$[id]) {
    const obj = {}
    obj[label] = () => {
      g$[id] = true
      if (typeof options[label] === "function") {
        options[label]()
      } else {
        msg(options[label])
      }
    }
    btn(obj)
  }
}

// clear screen function - will be called after button is pressed
const clearScreen = () => {
  const e = document.getElementsByClassName("main")[0]
  e.remove()
  g$.buttonCount = 0
}


const createPage = () => {
  let topRoot = document.getElementsByClassName("topRoot")[0]
  const main = document.createElement("div")
  const page = document.createElement("div")
  const btns = document.createElement("btns")
  if (!topRoot) {
    topRoot = document.createElement("div")
    topRoot.className = "topRoot"
    document.body.appendChild(topRoot)
  }
  topRoot.appendChild(main)
  main.className = "main"
  main.id = "main"
  page.className = "page"
  page.id = "page"
  btns.className = "btns"
  btns.id = "btns"

  // add elements to active DOM
  topRoot.appendChild(main)
  main.appendChild(page)
  main.appendChild(btns)
}

const handleEnv = () => {
  if (g$.env) {
    if (g$.isTalking || !g$.buttonCount) {
      msg(g$.env())
    }
  }
}

/**
 *
 * Create a new screen button. Buttons are added in the order that they are received.
 * Typical usage looks like:
 *
 * btn({"Click me!": () => console.log("Clicked.")})
 * 
 * -- or --
 * 
 *
 * The above uses a function callback, but a string could also
 * be used just to display a quick message on screen.
 *
 * @param {Object} options Options to create button with.
 */
const btn = (options) => {
  // prepare to create button
  const e = document.getElementById("btns")
  let label = ""
  let callback = null
  const reserved = ["unshift"]

  // only validate button if options object is correct
  if (typeof options === "object") {
    let shorthand = true
    if (options['l']) {
      label = options['l']
      shorthand = false
    }
    if (options['label']) {
      label = options['label']
      shorthand = false
    }
    if (options['c']) {
      callback = options['c']
      shorthand = false
    }
    if (options['callback']) {
      callback = options['callback']
      shorthand = false
    }
    if (shorthand) {
      label = Object.keys(options).filter((x) => reserved.indexOf(x) === -1)[0]
      callback = options[label]
    }
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
      const buffer = document.getElementsByClassName("main")[0].innerHTML
      clearScreen()

      // do some character cleanup
      if (g$.isTalking) {
        const state = c$?.state ?? "talk"
        const count = c$[state][`btn-${label}`] ?? 0
        g$.lastButtonPressed = label
        c$[state][`btn-${label}`] = count + 1
      }

      // add outgoing page animation
      const outPage = document.createElement("div")
      outPage.className = "outPage"
      outPage.id = "outPage"
      outPage.innerHTML = buffer
      const topRoot = document.getElementsByClassName("topRoot")[0]
      if (topRoot) {
        topRoot.appendChild(outPage)
      }

      // halfway through animation, clear the outgoing page and begin the
      // new page transition in
      setTimeout(() => {
        // remove outgoing page
        document.getElementById("outPage").remove()
        window.scrollTo(0, 0)
        createPage()
        typeof callback === "function" ? callback() : msg(callback)

        handleEnv()

        // if there are no buttons, and we have a valid last node to fall back on,
        // show the standard advance button
        if (!g$.buttonCount && g$.lastNode) {
          btn({
            "➜": () => {
              if (g$.lastNode) {
                g$.lastNode()
              }
            },
          })
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
    throw `Button could not be constructed! With options: ${JSON.stringify(
      options
    )}`
  }
}
