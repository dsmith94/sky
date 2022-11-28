Game.lakeSide = () => {
  const [name, a, the] = getName("spaceKing")

  p$(`
    
    A wide blue artificial lake lies here at the bottom of the valley by the village. Over the lake floats an enormous sign, so massive
    it simply cannot by floating on its own but doing so effortlessly. Standing directly underneath the sign, near the water, is ${a}
    ${name}. Back up the path is the village, and not far along the shore the lake muddies into a swamp.

    `)

  b$(
    `Read the incredible sign`,
    `
  
  The vast sign says in every known language in the universe, include Zlergaleg:
  
  **Here He Is**

  A gigantic red arrow points to ${the} ${name}.
  
  `
  )

  b$(`Speak to ${the} ${name}`, () => talk("spaceKing"))

  b$("Climb back up towards the village", () => go("cityEntrance"))
}
