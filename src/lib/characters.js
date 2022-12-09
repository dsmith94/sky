/**
 * @typedef CharacterType
 * @type {object}
 * @property {string} name - Character name.
 * @property {GameLocationID} location - Character location; should match the string-based identifier of a location in the game.
 * @property {function()} talk - Common character state called on talk command if no state is set.
 * @property {function() | string} talkLabel - Label text on talk button to show when character is present.
 * @property {function()} notMet - Callback to run if character has not been met yet and desc is called.
 * @property {function()} desc - Default character description callback. Called typically by the getDesc function.
 */


/**
 * Capitalize first character of string.
 * @param {string} str String to operate on.
 * @returns {string} String with first letter capitalized.
 */
const capitalize = (str) => str[0].toUpperCase() + str.slice(1)


/**
 * Get the number of times one button (by label name) has been tapped 
 * during a conversation with a character.
 * @param {label} [label] Label of button to get count from. When no label is provided, the label of the last tapped button will be used.
 * @param {character} [character] Character to reference button tap on. If none is provided, retrieve the current conversation character.
 * @param {state} [state] State of character conversation to referernce.
 * @returns {number} Number of times a given button has been pressed.
 */
const timesPressed = (label, character, state) => {
  if (!label) {
    label = g$.lastButtonPressed
  }
  if (!character) {
    character = g$.isTalking
  }
  if (!state) {
    state = c$.state ?? "talk"
  }
  const count = g$[character][state][`btn-${label}`] ?? 0
  return count
}

/**
 * Find out of word or combination of words has been used in a conversation with a character.
 * @param {string | Array} words String or array of words to search.
 * @param {Character} [character] String identifier of character. This isn't necessary if you're talking to the character presently.
 * @param {string} [state] State of character. If not provided, or if wildcard character (*) all states will be searched.
 * @return {boolean} True if word or combination of words has been used by player in conversation with character.
 */
const hasSaid = (words, character, state) => {
  character = (character) ? character : g$.isTalking
  state = (state) ? state : '*'

  const searchFunction = (lst) => {
    for (const l of lst) {
      if (Array.isArray(words)) {
        for (const w of words) {
          if (l.indexOf(w) > -1) {
            return true
          }
        }
      } else {
        if (l.indexOf(words) > -1) {
          return true
        }
      }
    }
    return false
  }

  if (state === '*') {
    const dirs = Object.keys(g$[character])
    for (const k of dirs) {
      const lst = Object.keys(g$[character][k])
        .filter(x => typeof g$[character][k][x] === 'number')
        .filter(x => x.indexOf('btn-') > -1)
      if (searchFunction(lst)) {
        return true
      }
    }
  } else {
    const lst = Object.keys(g$[character][state])
      .filter(x => typeof x === 'function')
      .filter(x => x.indexOf('btn-') > -1)
    return searchFunction(lst)
  }
  return false
}


/**
 * Get reference articles and name of character for screen printing.
 * @param {Character} [character] String identifier of character. This isn't necessary if you're talking to the character presently.
 * @returns {Array} Articles and current name of character, in form of [name a, the, that].
 */
const getName = (character) => {
  if (!character) {
    character = g$.isTalking
  }
  if (hasMet(character)) {
    return [g$[character].name, "", "", ""]
  } else {
    return [g$[character].name, "a", "the", "that"]
  }
}

/**
 * Sets name of character, often after player has learned the name.
 * @param {string} name Screen-friendly name of character, ala "Lord Dimwit Flathead" instead of the internal game id.
 * @param {Character} [character] String identifier of character. This isn't necessary if you're talking to the character presently.
 */
const setName = (name, character) => {
  if (!character) {
    character = g$.isTalking
  }
  g$[character]["name"] = name
}

/**
 * Determines if player has yet encountered a character.
 * @param {Character} [character] String identifier of character. This isn't necessary if you're talking to the character presently.
 * @returns {boolean} True if player has met character in the narrative.
 */
const hasMet = (character) => {
  if (!character) {
    character = g$.isTalking
  }
  return g$[character]["hasMet"]
}

/**
 * Gets the string of text to put on the Talk to button for a given character.
 * @param {Character} [character] Optional. String identifier of character. This isn't necessary if you're talking to the character presently.
 * @returns {string} Text for the Talk to button.
 */
const getTalkLabel = (character) => {
  if (!character) {
    character = g$.isTalking
  }
  const [name, a, the, that] = getName(character)
  if (g$[character].talkLabel) {
    if (typeof g$[character].talkLabel === "string") {
      return g$[character].talkLabel
    } else {
      return g$[character].talkLabel()
    }
  }
  return `Talk to ${the} ${name}`
}


/**
 * 
 * Get location of character. If none is provided, the current focused character
 * will be used.
 * 
 * @param {Character} [character] Name of character.
 * @returns {GameLocationID} Game location identifier.
 */
const getLocation = (character) => {
  const c = (character) ? g$[character] : c$
  return c.location
}


/**
 * 
 * Set location of character. 
 * If no character is provided, the current focused character
 * will be used.
 * 
 * @param {GameLocationID} location Location to place character.
 * @param {Character} [character] Character to place.
 */
const setLocation = (location, character) => {
  const c = (character) ? g$[character] : c$
  c.location = location
}


/**
 * Gets the active description for a character.
 * @param {Character} [character] Optional. String identifier of character. This isn't necessary if you're talking to the character presently.
 * @returns {string} Text string for character description.
 */
const getDesc = (character) => {
  if (!character) {
    character = g$.isTalking
  }
  const [name, a, the] = getName(character)
  const s = g$[character].state ?? "talk"
  if (!hasMet(character)) {
    if (g$[character]["notMet"]) {
      if (typeof g$[character]["notMet"] === "function") {
        return g$[character]["notMet"]()
      } else if (typeof g$[character]["notMet"] === "object") {
        if (g$[character]["notMet"][s]) {
          if (typeof g$[character]["notMet"][s] === "function") {
            return g$[character]["notMet"][s]()
          } else if (typeof g$[character]["notMet"][s] === "string") {
            return g$[character]["notMet"][s]
          }
        }
      }
      return g$[character]["notMet"] ?? capitalize(`${the} ${name} is here.`)
    }
  }
  if (typeof g$[character]["desc"] === "function") {
    return g$[character]["desc"]()
  } else if (typeof g$[character]["desc"] === "object") {
    if (g$[character]["desc"][s]) {
      if (typeof g$[character]["desc"][s] === "function") {
        return g$[character]["desc"][s]()
      } else if (typeof g$[character]["desc"][s] === "string") {
        return g$[character]["desc"][s]
      }
    }
  }
  return g$[character]["desc"] ?? capitalize(`${the} ${name} is here.`)
}


/**
 * 
 * Set state of character. If no character argument is passed,
 * the current talking character is used.
 * 
 * @param {*} state New state to apply to character.
 * @param {*} character Character on which to apply new state.
 */
const setState = (state, character) => {
  const s = state ?? "talk"
  if (!character) {
    character = g$.isTalking
  }
  g$[character].state = s
  if (g$.isTalking === character) {
    g$.lastNode = g$[character][s]
  }
}


/**
 * Get number of times player has visited a location.
 * @param {GameLocationID} [location] String identifier of location. If none is provided, the current location will be used.
 * @return {number} Number of times visited.
 */
const hasVisited = (location) => {
  if (!location) {
    location = g$.currentLocationName
  }
  const v = g$[location].visited ?? 0
  return v 
}


const addToMap = (id) => {
  if (!id) {
    id = g$.isTalking
  }
  if (!g$.map) {
    g$.map = []
  }
  if (g$[id]) {
    if (g$[id].location) {
      if (g$.map.indexOf(id) === -1) {
        g$.map.push(id)
      }
    }
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
    c$["hasMet"] = true
    const s = c$?.state ?? "talk"
    addToMap()
    if (g$?.map?.length === 1) {
      if (!g$.showFastTravelTip) {
        g$.showFastTravelTip = 1
      }
    }
    g$[character][s]()
    g$.lastNode = g$[character][s]
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


