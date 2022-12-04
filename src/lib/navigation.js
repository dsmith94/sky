let c$ = {}

let lastNode = () => {}

/**
 * Navigate player to a new location.
 * @param {GameLocationID} location String identifier of location to navigate.
 */
const go = (location) => {

  const handleLocations = () => {
    Object.keys(g$).map(dir => {
      if (g$[dir].location) {
        if (g$.currentLocationName === g$[dir].location) {
          const d = getDesc(dir)
          msg(d)
          if (g$[dir].talk) {
            const l = getTalkLabel(dir)
            const obj = {}
            obj[l] = talk(dir)
            btn(obj, true)
          }
        }
      }
    })
  }

  return () => {
    g$.currentLocationName = location
    const callback = () => {
      g$[location]()
      handleLocations()
    }
    callback()
    lastNode = callback
  }
}

const setState = (character, state) => {
  const s = state ?? "talk"
  g$[character].state = s
  if (g$.isTalking === character) {
    lastNode = g$[character][s]
  }
}


/**
 * Initiate new conversation with character.
 * @param {Character} character String identifier of character you wish to initiate conversation.
 */
const talk = (character) => {
  return () => {
    g$.isTalking = character
    c$ = g$[character]
    c$.hasMet = true
    const s = c$?.state ?? "talk"
    backButtonHidden = true
    g$[character][s]()
    lastNode = g$[character][s]
  }
}

/**
 * Finish conversation with character.
 * @param {string} label Text message to display on the Done with Conversation button.
 * @param {function} [finishConversationCallback] Optional. Callback to perform some action when the conversation is finished.
 */
const done = (label, finishConversationCallback) => {
  const obj = {}
  obj[label] = () => {
    if (finishConversationCallback) {
      finishConversationCallback()
      btn({
        "➜": () => {
          go(g$.currentLocationName)()
          g$.isTalking = ""
        }
      })
    } else {
      go(g$.currentLocationName)()
      g$.isTalking = ""
    }
  }
  btn(obj)
}
