Game.nearSwamp = () => {
  const [name, a, the, that] = getName("loon")
  const loonPresent = g$.loon.location === currentLocationName
  p$(`
          
          The lake ebbs here into a greenish-brown mire, which on this end bubbles vigorously with sulfur. A trail runs along the swamp from
          the lake to a small cave. 
          
      `)

  loonPresent && getDesc("loon")

  roll(50) &&
    p$(
      pick([
        "A particularly large bubble pops, filling the air with stench.",
        "A loud POP carries over the water as another bubble explodes.",
      ])
    )

  loonPresent && b$(`Talk to ${the} ${name}`, () => talk("loon"))

  b$(`Head towards the cave`, () => go("cave"))

  b$(`Go to the clean part of the lake`, () => go("lakeSide"))
}
