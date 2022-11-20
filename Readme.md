
# SKY JS

A minimalist modern adventure game engine for smartphones.

## What is Sky?
Sky JS is a very simple engine (clocking in less than 5KB) for modern web browsers to play adventure games. The game content is wrapped into
a single JS file with the engine in a file called sky.min.js. Presentation is handled by the index.html file and the style css.

## How to Use Sky
Sky JS presents some neatly formatted text show convey to the player what is going on in the story, followed by a list of buttons. By tapping the buttons
indicates to the game what you want your player character to do next in the story.

## How to Write Sky Games
Sky JS Games are written with a very simple subset of JS. Sky doesn't prevent you from using whatever flavor of ES6 you want—it all gets piped through
Uglify anyways.

A typical node in a Sky JS story would look something like this:

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

This would be contained in a file marked Spaceship.js, in the src/game folder.
