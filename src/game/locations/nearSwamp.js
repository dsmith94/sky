/** @type {LocationType} */
Game.nearSwamp = () => {
  msg(`
          
          The lake ebbs here into a greenish-brown mire, which on this end bubbles vigorously with sulfur. A trail runs along the swamp from
          the lake to a small cave. 
          
      `)


  roll(50) &&
    msg(
      pick([
        "A particularly large bubble pops, filling the air with stench.",
        "A loud POP carries over the water as another bubble explodes.",
      ])
    )

  btn({"Head towards the cave": go("cave")})

  btn({"Go to the clean part of the lake": go("lakeSide")})
}
