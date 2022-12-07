/** @type {LocationType} */
Game.cityEntrance = () => {
  msg(`
        
        Tall white stone walls stand gleaming the sun,
        surrounded by a thin brown line of moat. A narrow bridge
        leads to an arched open gate in the wall made of brass and crystal.
        The path forks off to a lake, over which floats a 1000 meter tall sign.
        
    `)

  env(() => roll(25) && pick([
    'A door quietly shuts somewhere beyond the wall.',
    'The wind whips just enough around the walls to produce a low, sad whistle.',
  ]))

  once({"Read the 1000 meter tall sign": `
    The writing is small, you'll have to get closer by heading towards the lake.
  `})
  
  btn({"Head up the hill": go("outsideShip")})
  btn({"Follow the path to the lake": go("lakeSide")})
  btn({"Enter the village": go("city")})
}
