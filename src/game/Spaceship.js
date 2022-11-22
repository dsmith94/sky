Game.myShip = {
  stillHere: true,

  cockpit: () => {
    m$(`
        
            Your command chair is surrounded by an array of screens, lights and controls telling you every detail
            of what's happening on your ship. Right now, they're all very upset for some reason. A distant alarm
            echoes from the engine cavity. A sturdy metal ladder descends to the main deck.

        `);

    i$("Climb down to the Main Deck", () => go$(g$.myShip.mainDeck));

    i$(
      "Sit in the chair",
      `You sit in the command chair and feel very heroic.`
    );

    i$(
      "Look out the window",
      `The purple sky and distant golden mountains don't resemble any planet you've visited before.`
    );
  },

  mainDeck: () => {
    m$(`
    
    This part of the ship is the least damaged—it's a pretty good thing you were here during the crash. The hyper-sleep pod is depowered,
    along with most everything else on this deck. Yates will probably have all the systems on and off about a hundred times before
    we can limp to a repair shop.
    
    `);

    i$(`Go to the cockpit`, () => go$(g$.myShip.cockpit));

    i$(`Exit the ship`, () => go$(g$.myShip.outside));
  },

  outside: () => {
    if (g$.myShip.stillHere) {
      m$(`
    
    Your ship lies in a crumpled heap at the top of a hill. Yates is kneeled next to an open panel, attempting repairs. A winding
    path leads down to a humble little village.
    
    `);

      i$(`Hey, Yates`, () => go$(g$.yates.intro));

      i$(`Enter the ship`, () => go$(g$.myShip.mainDeck));
    }

    i$(`Go down to the village`, () => go$(g$.city.entrance));
  },
};
