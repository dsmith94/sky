
Game.intro = {

    firstPage: () => {

        m$(`
        
        There's a sound. It's not good. Your brain, still steeped in hyper-sleep chemicals, has come round to the point
        where you're awake and something has gone woefully awry.

        It's an alarm. An alarm is ringing from the engine.

        The hyper-sleep containment unit swings open and your feet find the cold metal floor. The air of your ship is 
        thick with smoke.

        `)

        i$(`Ugghh... It's too early for an emergency...`, () => go$(game.intro.secondPage))

    },

    secondPage: () => {

        m$(`
        
        Then another sound: this one is sudden and shakes the entire ship. You grasp a bulkhead and nearly slice your fingers on
        the cheap titanium bolts holding your ship together. Another shake, like being inside dump truck that's currently
        in the process of traversing to Mars with a catapult.

        After that, everything is still. The alarm was still ringing. Your engineer, and the only member of your crew, Yates,
        emerges into your still blurry vision.
        
        `)

        i$(`Yates! What happened?`, () => go$(game.intro.thirdPage))

    },

    thirdPage: () => {

        m$(`
        
        "Sorry, boss," said Yates with a noisy slurp. He was drinking something. Slowly it dawned on you; it was a ginormous can of raspberry soda pop,
        festooned with a cherry-red flamingo straw.

        "Not sure how it happened, but somebody got raspberry soda all over the engine core. Had to make an emergency landing till
        we can fix this rig. Shouldn't be more than a couple of weeks.
        
        `)

        i$(`Did you say two weeks?`, () => go$(game.intro.thirdPage))

    }

}
