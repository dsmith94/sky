Game.start = () => {
  p$(`

    # We Might All Die on Snorlag
    
    ## A game by spaceflounder
    
    `)

  b$(`Start`, () => go("intro1"))
}

Game.intro1 = () => {
  p$(`

    There's a sound. It's not good. Your brain, still steeped in hyper-sleep chemicals, has come round to the point
    where you're awake and something has gone woefully awry.

    It's an alarm. An alarm is ringing from the engine.

    The hyper-sleep containment unit swings open and your feet find the cold metal floor. The air of your ship is 
    thick with smoke.

    You make out some text in screamy caps on a command display:

    <div class='console'>
    ALL SYSTEMS FAILED
    </div>

    <div class='console'>
    COLLISION WITH PLANET SNORLAG IMMINENT
    </div>
    
    <div class='console'>
    WE'RE ALL GONNA DIE!!
    </div>
    
    `)

  b$(`Ugghh... It's too early for an emergency...`, () => go("intro2"))
}

Game.intro2 = () => {
  p$(`
          
    Then another sound: this one is sudden and shakes the entire ship. You grasp a bulkhead and nearly slice your fingers on
    the cheap titanium bolts holding your ship together. Another shake, like being inside a dump truck that's currently
    in the process of traversing to Mars by catapult.

    After that, everything is still. The alarm is still ringing. Your engineer, and the only member of your crew, Yates,
    emerges into your still blurry vision.
          
    `)

  b$(`Yates! What happened?`, () => go("intro3"))
}

Game.intro3 = () => {
  p$(`
          
    "Sorry, boss," said Yates with a noisy slurp. He was drinking something. Slowly it dawned on you; it was a ginormous can of raspberry soda pop,
    festooned with a cherry-red flamingo straw.

    "Not sure how it happened, but somebody got raspberry soda all over the engine core. Had to make an emergency landing till
    we can fix this rig. Shouldn't be more than a couple of weeks.
          
    `)

  b$(`Did you say two weeks?`, () => go("outsideShip"))
}
