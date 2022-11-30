let c$ = {}

let lastNode = () => {}
let currentLocationName = ''

/**
 * Navigate player to a new location.
 * @param {Location} location String identifier of location to navigate.
 */
const go = (location) => {

  const handleLocations = () => {
    Object.keys(g$).map(dir => {
      if (g$[dir].location) {
        if (currentLocationName === g$[dir].location) {
          const d = getDesc(dir)
          const l = getTalkLabel(dir)
          p$(d)
          if (g$[dir].talk) {
            b$(l, () => talk(dir), true)
          }
        }
      }
    })
  }

  backButtonHidden = true
  currentLocationName = location
  const callback = () => {
    g$[location]()
    handleLocations()
  }
  callback()
  lastNode = callback
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
 * @param {Character} character String identifier of .
 */
const talk = (character) => {
  g$.isTalking = character
  c$ = g$[character]
  c$.hasMet = true
  const s = c$?.state ?? "talk"
  backButtonHidden = true
  g$[character][s]()
  lastNode = g$[character][s]
}

/**
 * Finish conversation with character.
 * @param {Character} character String identifier of .
 */
const done = (label, finishConversationCallback) =>
  b$(label, () => {
    if (finishConversationCallback) {
      finishConversationCallback()
      b$('OK', () => {
        go(currentLocationName)
        g$.isTalking = ""    
      })
    } else {
      go(currentLocationName)
      g$.isTalking = ""  
    }
  })
