/**
 * @typedef CharacterType
 * @type {object}
 * @property {string} name - Character name.
 * @property {Location} location - Character location; should match the string-based identifier of a location in the game.
 * @property {function()} talk - Common character state called on talk command if no state is set.
 * @property {function() | string} talkLabel - Label text on talk button to show when character is present.
 * @property {function()} notMet - Callback to run if character has not been met yet and desc is called.
 * @property {function()} desc - Default character description callback. Called typically by the getDesc function.
 */

const capitalize = (str) => str[0].toUpperCase() + str.slice(1)

/**
 * Get reference articles and name of character for screen printing.
 * @param {Character} character String identifier of character.
 * @returns {Array} Articles and current name of character, in form of [name a, the, that].
 */
const getName = (character) => {
  if (!character) {
    character = g$.isTalking
  }
  const a = g$[character]["a"] ?? "a"
  const the = g$[character]["the"] ?? "the"
  const that = g$[character]["that"] ?? "that"
  const name = g$[character]["name"] ?? "man"
  return [name, a, the, that]
}

/**
 * Sets name of character, often after player has learned the name.
 * @param {Character} character String identifier of character.
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
 * @returns {Boolean} True if player has met character in the narrative.
 */
const hasMet = (character) => {
  if (!character) {
    character = g$.isTalking
  }
  return g$[character]["hasMet"]
}

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
