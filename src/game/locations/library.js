/** @type {LocationType} */
Game.library = () => {
    p$(`
    
    Golden sunlight filters in from an oculus at the top of a vast dome, which is 
    almost entirely empty. Crystals of a variety of colors line the walls, and if you listen,
    you can hear them hum ever so gently.
    
    `)

    b$('Listen to the hum', `
    
    The hum of the crystals fills your ears with a kind of aural radiance, like Yanni
    and Enya playing at full volume in the same room.
    
    `)

    b$('Exit the library', () => go('city'))
}