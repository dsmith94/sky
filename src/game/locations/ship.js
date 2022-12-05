Game.myShip = {
  stillHere: true,
}

/** @type {LocationType} */
Game.cockpit = () => {
  msg(`
          
    Your command chair is surrounded by an array of screens, lights and controls telling you every detail
    of what's happening on your ship. Right now, they're all very upset for some reason. A distant alarm
    echoes from the engine cavity. A sturdy metal ladder descends to the main deck.
  
    `)

  btn({ "Climb down to the Main Deck": go("mainDeck") })

  btn({ "Sit in the chair": `You sit in the command chair and feel very heroic.` })

  btn({
    "Look out the window":
      `The purple sky and distant golden mountains don't resemble any planet you've visited before.`
  })
}

/** @type {LocationType} */
Game.mainDeck = () => {
  msg(`
      
    This part of the ship is the least damaged—it's a pretty good thing you were here during the crash. The hyper-sleep pod is depowered,
    along with most everything else on this deck. Yates will probably have all the systems on and off about a hundred times before
    we can limp to a repair shop.
      
    `)

  btn({ "Go to the cockpit": go("cockpit") })

  btn({ "Exit the ship": go("outsideShip") })
}

/** @type {LocationType} */
Game.outsideShip = () => {
  msg(`
      
    Your ship lies in a crumpled heap at the top of a hill overlooking a high cliff.
    Yates is kneeled next to an open panel, attempting repairs. A winding
    path leads down to a humble little village.
      
    `)

  hasVisited() && roll(50) && msg(pick([
    'A big pink cloud poofs on by over the horizon.',
    'A gentle breeze blows peacefully.',
    'Some distant animal squawks mournfully from the valley below.',
  ]))

  btn({"Hey, Yates": talk("yates") })

  btn({"Admire the view": `
  
  A wide sea stretches beyond the cliff's edge, sparkling in the bright crisp morning air.

  `})

  btn({"Assess my ship": `
    
    It's a CM6305 Talon Class Explorer ship, fitting with your job as a space explorer-for-hire. For certain, it's seen better days,
    this morning's landing not withstanding. Currently, Yates ${pick([
      'has coolant spilled all over the hull',
      'is tightening bolts on a rusted structural support',
      'is pulling a fuel hose from under the engine'
    ])}.
    
    `})

  btn({ "Enter the ship": go("mainDeck") })

  btn({ "Go down to the village": go("cityEntrance") })
}
