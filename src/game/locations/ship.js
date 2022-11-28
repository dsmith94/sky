Game.myShip = {
  stillHere: true,
}

Game.cockpit = () => {
  p$(`
          
    Your command chair is surrounded by an array of screens, lights and controls telling you every detail
    of what's happening on your ship. Right now, they're all very upset for some reason. A distant alarm
    echoes from the engine cavity. A sturdy metal ladder descends to the main deck.
  
    `)

  b$("Climb down to the Main Deck", () => go("mainDeck"))

  b$("Sit in the chair", `You sit in the command chair and feel very heroic.`)

  b$(
    "Look out the window",
    `The purple sky and distant golden mountains don't resemble any planet you've visited before.`
  )
}

Game.mainDeck = () => {
  p$(`
      
    This part of the ship is the least damaged—it's a pretty good thing you were here during the crash. The hyper-sleep pod is depowered,
    along with most everything else on this deck. Yates will probably have all the systems on and off about a hundred times before
    we can limp to a repair shop.
      
    `)

  b$(`Go to the cockpit`, () => go("cockpit"))

  b$(`Exit the ship`, () => go("outsideShip"))
}

Game.outsideShip = () => {
  if (g$.myShip.stillHere) {
    p$(`
      
    Your ship lies in a crumpled heap at the top of a hill. Yates is kneeled next to an open panel, attempting repairs. A winding
    path leads down to a humble little village.
      
    `)

    b$(`Hey, Yates`, () => talk("yates"))

    b$(`Enter the ship`, () => go("mainDeck"))
  } else {
    p$(`
    
    You realize now how your ship was obstructing a lovely view before it turned into a smouldering crater. All things being equal, you do
    at least enjoy the view.
    
    `)
  }

  b$(`Go down to the village`, () => go("cityEntrance"))
}