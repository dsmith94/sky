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
    label = lastButtonPressed
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
 * @param {Character} [character] Optional. String identifier of character. This isn't necessary if you're talking to the character presently.
 * @param {string} [state] Optional. State of character. If not provided, or if wildcard character (*) all states will be searched.
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
 * @param {Character} [character] Optional. String identifier of character. This isn't necessary if you're talking to the character presently.
 * @returns {Array} Articles and current name of character, in form of [name a, the, that].
 */
const getName = (character) => {
  if (!character) {
    character = g$.isTalking
  }
  const a = g$[character]["a"] ?? "a"
  const the = g$[character]["the"] ?? "the"
  const that = g$[character]["that"] ?? "that"
  const name = g$[character]["name"] ?? "person"
  return [name, a, the, that]
}

/**
 * Sets name of character, often after player has learned the name.
 * @param {string} name Screen-friendly name of character, ala "Lord Dimwit Flathead" instead of the internal game id.
 * @param {Character} [character] Optional. String identifier of character. This isn't necessary if you're talking to the character presently.
 */
const setName = (name, character) => {
  if (!character) {
    character = g$.isTalking
  }
  g$[character]["a"] = ""
  g$[character]["the"] = ""
  g$[character]["that"] = ""
  g$[character]["name"] = name
}

/**
 * Determines if player has yet encountered a character.
 * @param {Character} [character] Optional. String identifier of character. This isn't necessary if you're talking to the character presently.
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
 * Gets the active description for a character.
 * @param {Character} [character] Optional. String identifier of character. This isn't necessary if you're talking to the character presently.
 * @returns {string} Text string for character description.
 */
const getDesc = (character) => {
  if (!character) {
    character = g$.isTalking
  }
  if (!hasMet(character)) {
    if (g$[character]["notMet"]) {
      if (typeof g$[character]["notMet"] === "function") {
        return g$[character]["notMet"]()
      } else {
        return g$[character]["notMet"] ?? capitalize(`${the} ${name} is here.`)
      }
    }
  }
  if (typeof g$[character]["desc"] === "function") {
    return g$[character]["desc"]()
  }
  const [name, a, the] = getName(character)
  return g$[character]["desc"] ?? capitalize(`${the} ${name} is here.`)
}
