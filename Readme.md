
# SKY JS

A minimalist modern adventure game engine for smartphones.

## What is Sky?
Sky JS is a very simple engine (clocking in at around 5KB, uncompressed) for modern web browsers to play adventure games. The game content is wrapped into
a single JS file with the engine in a file called sky.min.js. Presentation is handled by the index.html file and the style css.

## How to Use Sky
Sky JS presents some neatly formatted text to convey to the player what is going on in the story, followed by a list of buttons. Tapping the buttons
indicates to the game what you want your player character to do next.

## How to Write Sky Games
Sky JS Games are written with a very simple subset of JS. Sky doesn't prevent you from using whatever flavor of ES6 you want—it all gets piped through
Uglify anyways. Sky assumes you're reasonably capable with JavaScript.

A typical node in a Sky JS story would look something like this:

```js
Game.outsideShip = () => {
    msg(`
      
    Your ship lies in a crumpled heap at the top of a hill. Yates is kneeled next to an open panel, attempting repairs. A winding
    path leads down to a humble little village.
      
    `)

    btn({"Hey, Yates": talk("yates")})

    btn({"Enter the ship": go("mainDeck")})

    btn({"Go down to the village": go("cityEntrance")})
}
```

Sky doesn't care how you organize your game files and folders, as long as you put all game pertinent stuff in the src/game directory. This
node is contained in the src/game/locations/ship.js file, but you're free to set up however you like.

The one thing you do really have to do is make your nodes part of the Game object. For example, the node above is in Game.outsideShip.

### How to Write Sky Characters
A simple in-game character might look something like this.

```js
Game.yates = {

  _: () => {

    msg(`
          
        Yates is (literally) your second hand man; a 50/50 medley of robotic and organic components, cobbled into a hodge-podge of an android. 
        The bio stuff is cut-rate, to say the least, likely because he sustains every six hours or so with junk food and their abundant hydrocarbons.
        Thus, he constantly smells vaguely of processed cheese dust.
    
        Presently, he's trying to salvage what's left of your engine, landing gear, and
        emergency seagull repellent.
          
        `)

    btn("Tell me again why your name is Yates", () => {
      msg(`
                  
            "Actually," said Yates, "My true designation is Cybernetic Reploid model 88, or CR-88.
            My first owner called my Crazy 8's, then my next owner called
            me Eights, and finally the last one called my Yates."
                  
        `)
    })

    done(`Well, keep working, we've got to get off this rock`)
  }

}
```

Note here that nodes (or rooms) in Sky are always functions, but characters are always objects.

## Sky Game Commands
You can learn everything Sky can do in about 14 terse commands. Learning the basic 5 gives you enough power to write a simple game.

### Basic Commands 
* msg(text) - Print text to the screen
* btn(label, function) - Display a button. These are shown in the order you call them.
* talk(character) - Initiate a conversation with a game character. Sky is designed to make in-game characters easy to code.
* done(text) - Use this special button to end conversations with a character.
* go(location) - Changes the player location. The next node will be loaded and displayed.

### Advanced Commands
* p1$(text) - Print text to the screen, but only one time
* once(label, function) - Display a button, but only one time. These are shown in the order you call them.
* setState(character, state) - Changes a character state. States allow you to state moods and conditions for your characters.
* c$ - Character handle. You can perform direct operations on a character if you need to.
* g$ - Game handle. You can perform direct operations on the current running game if you need to.

### Randomization Commands
* shuffle(array) - Shuffles an array.
* roll(odds) - Gives you a yes or no likelihood roll of the odds.
* countdown(array) - Removes one element from an array each time it's called and returns it, until just one is left.
* pick(arr) - Picks one random element from a shuffled array.
 
