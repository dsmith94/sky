/** @type {LocationType} */
Game.festival = () => {
  msg(`
          
    A vast crowd numbering into the millions, with every species you've ever
    heard of and a few you haven't, dance and drink furiously
    for one last big hoo-hah.
    A repurposed shipping crate is used as the venue, and inside the compression field, you 
    and your fellow revelers find it larger than an ampitheater.
          
    `)

  env(() => roll(25) && pick([
    "An explosion of confetti fills the air, with several colored bits landing on your face.",
    "The crowd cheers, as though someone either drank another flight or passed out.",
  ]))

  
  btn({"Dance with the crowd": `

    OOF! OUCH! HMPH! Arms, tentacles, and other miscellaneous appendages
    flail into your carbon-based biology as you attempt to cut a rug.
  
  `})
  
  btn({"Listen to the music": `
    
    It's tough to hear any lyrics, but it sounds like the ${pick([
        `3rd Movement of Parnassor the Tuneless Suicidal on the Great Ending of Everything Ever.
        Either that, or it's another remake of that Sister Sledge song.`,
        `Whistling Beaked Monks of Planet Shnoz. They were really big on Snotify last year.`,
        `Beethoven's 5th. Not *the* Beethoven, though—the other one, a clone of Beethoven who
        wrote only polkas.`
    ])}
  
  `})

  btn({"Leave the festival": go("city")})

}
