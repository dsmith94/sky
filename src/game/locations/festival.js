Game.festival = () => {
  const [name, a, the, that] = getName("merrick")
  p$(`
          
    A vast crowd numbering into the millions, with every species you've ever heard of and a few you haven't, dance and drink furiously
    for one last big hoo-hah. The music is deafening, and the crowd even more so.       
          
    `)
  getDesc("merrick")

  roll(50) &&
    p$(
      pick([
        "An explosion of confetti fills the air, with several colored bits landing on your face.",
        "The crowd cheers, as though someone either drank another flight or passed out.",
      ])
    )

  b$(`Talk to ${the} ${name}`, () => talk("merrick"))
  b$(
    `Dance with the crowd`,
    `OOF! OUCH! HMPH! Arms, legs and tentacles flail around you as you attempt to cut a rug.`
  )
  b$(
    `Listen to the music`,
    `It's tough to hear any lyrics, but it sounds like the ${pick([
        `3rd Movement of Parnassor the Tuneless Suicidal on the Great Ending of Everything Ever.
        Either that, or it's another remake of that Sister Sledge song.`,
        `Whistling Beaked Monks of Planet Shnoz. They were really big on Snotify last year.`,
        `Beethoven's 5th. Not *the* Beethoven, though—the other one, a clone of Beethoven who
        wrote only polkas.`
    ])}`
  )
  b$(`Leave the festival`, () => go("city"))
}
