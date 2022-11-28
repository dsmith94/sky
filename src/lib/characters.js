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
  if (typeof g$[character]["desc"] === 'function') {
    return g$[character]["desc"]()
  }
  const [name, a, the] = getName(character)
  return g$[character]["desc"] ?? capitalize(`${the} ${name} is here.`)
}
