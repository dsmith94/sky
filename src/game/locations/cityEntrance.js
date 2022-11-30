/** @type {LocationType} */
Game.cityEntrance = () => {
  p$(`
        
        Not far from the hill where your spaceship crashed stands a tall white stone wall surrounded by a thin brown line of a moat. A narrow bridge
        leads over the moat to an arched open gate made of brass and crystal. Beyond the gate is the village. Around the wall further down
        the path forks down by a lake, over which floats a 1000 meter tall sign.
        
    `)

  roll(50) && p$(pick([
    'A door quietly shuts somewhere beyond the wall.',
    'The wind whips just enough around the walls to produce a low, sad whistle.',
  ]))

  b1$(
    `Read the 1000 meter tall sign`,
    `The writing is small, you'll have to get closer by heading towards the lake.`
  )
  b$(`Head up the hill`, () => go("outsideShip"))
  b$(`Follow the path to the lake`, () => go("lakeSide"))
  b$(`Enter the village`, () => go("city"))
}
