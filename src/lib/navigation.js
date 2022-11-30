let c$ = {}

let lastNode = () => {}
let currentLocationName = ''

/**
 * Navigate player to a new location.
 * @param {Location} location String identifier of location to navigate.
 */
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


/**
 * Initiate new conversation with character.
 * @param {Character} character String identifier of character.
 */
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
