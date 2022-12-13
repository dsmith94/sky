/** @type {LocationType} */
Game.library = () => {
  msg(`
    
    Golden sunlight filters in from an oculus at the top of a vast dome, which is 
    almost entirely empty. Crystals of a variety of colors line the walls, and if you listen,
    you can hear them hum ever so gently.
    
    `)

  btn(
    "Listen to the hum", `
    
        The hum of the crystals fills your ears with a kind of aural radiance, like low-volume
        Battle of the Bands between Enya and Yanni. 
    
    `,
  )

  btn( "Exit the library", go("city") )
}
