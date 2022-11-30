/**
 * @typedef CharacterType
 * @type {object}
 * @property {string} name - Character name.
 * @property {string} location - Character location; should match the string-based identifier of a location in the game.
 * @property {function()} talk - Common character state called on talk command if no state is set.
 * @property {function()} notMet - Callback to run if character has not been met yet and desc is called.
 * @property {function()} desc - Default character description callback. Called typically by the getDesc function.
 */

const capitalize = (str) => str[0].toUpperCase() + str.slice(1)

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

const setName = (name, character) => {
  if (!character) {
    character = g$.isTalking
  }
  g$[character]["a"] = ""
  g$[character]["the"] = ""
  g$[character]["that"] = ""
  g$[character]["name"] = name
}

const hasMet = (character) => {
  if (!character) {
    character = g$.isTalking
  }
  return g$[character]["hasMet"]
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
