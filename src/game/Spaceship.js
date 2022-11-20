Game.myShip = {
    cockpit: () => {
        m$(`
        
            Your command chair is surrounded by an array of screens, lights and controls telling you every detail
            of what's happening on your ship. Right now, they're all very upset for some reason. A distant alarm
            echoes from the engine cavity. A sturdy metal ladder descends to the main deck.

        `)

        i$('Climb down to the Main Deck', () => go$(game.myShip.mainDeck))

        i$('Sit in the chair', () => `You sit in the command chair and feel very heroic.`)

        i$('Look out the window', `Hmm. The purple sky and distant golden mountains don't resemble any planet you've visited before.`)


    }
}