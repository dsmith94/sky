Game.cityEntrance = () => {
  const hologram = c$.hasMet ? "Rebnah" : "hologram"
  p$(`
        
        Not far from the hill where your spaceship crashed stands a tall white stone wall surrounded by a thin brown line of a moat. A narrow bridge
        leads over the moat to an arched open gate made of brass and crystal. Beyond the gate is a sleepy little village.
        
    `)

  if (!c$.hasMet) {
    p1$(
      `
        
        One of those weird greeter holograms has popped out of thin air. She has numerous arms in inconvenient places and 
        a noggin which resembles that of a reasonably pleased purple rhinoceros.
        
        `,

      `
        
        That greeter hologram is trying to get your attention. She has numerous arms in inconvenient places and 
        a noggin which resembles that of a reasonably pleased purple rhinoceros.
        
        `
    )
  } else {
    p$(`
        
        Rebnah the greeter hologram waves to you cheerily, which is impressive considering her vast quantity of arms.
        
    `)
  }

  b$(`Chat with ${hologram}`, () => talk("rebnah"))
  b$(`Head up the hill`, () => go("outsideShip"))
  b$(`Enter the city`, () => go("outsideShip"))
}
