let c$ = {}

let lastNode = () => {}
let currentLocationName = ''

const go = (location) => {
  backButtonHidden = true
  currentLocationName = location
  g$[location]()
  lastNode = g$[location]
}

const setState = (character, state) => {
  const s = state ?? "_"
  g$[character].state = s
  if (g$.isTalking === character) {
    lastNode = g$[character][s]
  }
}

const talk = (character) => {
  g$.isTalking = character
  c$ = g$[character]
  c$.hasMet = true
  const s = c$?.state ?? "_"
  backButtonHidden = true
  g$[character][s]()
  lastNode = g$[character][s]
}

const done = (label) =>
  b$(label, () => {
    go(currentLocationName)
    g$.isTalking = ""
  })
