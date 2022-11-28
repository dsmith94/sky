let backButtonHidden = false

const b1$ = (label, callback) => {
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
    })
  }
}

const b$ = (label, callback) => {
  const e = document.getElementById("card")
  if (e && label && callback) {
    label = label.trim()
    const b = document.createElement("button")
    b.onclick = () => {
      clearScreen()
      backButtonHidden = true
      window.scrollTo(0, 0)
      p$(callback)
      if (document.getElementById("card").innerHTML === "") {
        backButtonHidden = false
      }
      if (!backButtonHidden && lastNode) {
        b$("Back", () => {
          if (lastNode) {
            lastNode()
          }
        })
      }
    }
    b.className = "button"
    b.innerHTML = `<div class='buttonText'>${skylight(label, true)}</div>`
    e.appendChild(b)
  }
}
