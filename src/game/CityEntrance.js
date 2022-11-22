Game.city = {
  entrance: () => {
    const hologram = (g$.rebnah.hasMet) ? 'Rebnah' : 'hologram';
    m$(`
        
        Not far from the hill where your spaceship crashed stands a tall white stone wall surrounded by a thin brown line of a moat. A narrow bridge
        leads over the moat to an arched open gate made of brass and crystal. Beyond the gate is a sleepy little village.
        
        `);

    if (!g$.rebnah.hasMet) {
      once$(
        `
        
        One of those weird greeter holograms has popped out of thin air. She has numerous arms in inconvenient places and 
        a noggin which resembles that of a reasonably pleased purple rhinoceros.
        
        `,

        `
        
        That greeter hologram is trying to get your attention. She has numerous arms in inconvenient places and 
        a noggin which resembles that of a reasonably pleased purple rhinoceros.
        
        `
      );
    } else {
        m$(`
        
        Rebnah the greeter hologram waves to you cheerily, which is impressive considering her vast quantity of arms.
        
        `)
    }

    i$(`Chat with ${hologram}`, () => go$(g$.rebnah.intro))
    i$(`Head up the hill`, () => go$(g$.myShip.outside))
    i$(`Enter the city`, () => go$(g$.myShip.outside))


  },
};
