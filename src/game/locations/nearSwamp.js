/** @type {LocationType} */
Game.nearSwamp = () => {
  msg(`
          
          The lake ebbs here into a greenish-brown mire, which on this end bubbles vigorously with sulfur. A trail runs along the swamp from
          the lake to a small cave. 
          
      `)

    g$.loon.location !== 'nearSwamp' &&      
      msg(`
      
      On the exact spot where Loon was standing is a large metal crank in the mud
      labeled *FORCE FIELD CONTROL*.

      `) &
      btn({'Turn crank': () => {

        g$.caveForceFieldOff = true
        msg(`
        
        The force field control is now in the off position.
        
        `)

      }})

  hasVisited() && roll(50) &&
    msg(
      pick([
        "A particularly large bubble pops, filling the air with stench.",
        "A loud POP carries over the water as another bubble explodes.",
      ])
    )

  btn({"Head towards the cave": go("caveMouth", () => {
    if ($g.caveForceFieldOff) {
      g$.loon.location = 'nearSwamp'
    }
  })})

  btn({"Go to the clean part of the lake": go("lakeSide", () => {
    if ($g.caveForceFieldOff) {
      g$.loon.location = 'nearSwamp'
    }
  })})
}
