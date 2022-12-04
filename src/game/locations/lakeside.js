/** @type {LocationType} */
Game.lakeSide = () => {
  const [name, a] = getName("spaceKing")
  const talkLabel = getTalkLabel("spaceKing")
  const obj = {}
  obj[talkLabel] = () => talk("spaceKing")

  msg(`
    
    At the bottom of the valley by the village is a clear, blue lake. Over the lake is an enormous sign, so massive
    it cannot possibly be floating on its own but appears to be doing so effortlessly.
    Standing directly underneath the sign, near the water, is ${a}
    ${name}. Back up the path is the village, and not far along the shore the lake muddies into a swamp.

  `)

  roll(50) &&
    msg(
      pick([
        "The wind creates soft little ripples over the lake.",
        "A gentle breeze blows peacefully.",
        "Some distant animal squawks mournfully from the valley below.",
      ])
    )

  btn({"Read the incredible sign": `
  
    The vast sign says in every known language in the universe, including ✧❖➶⨇⨖⨿⩉:
  
    **Here He Is**

    A gigantic red arrow points to {the} {name}.
  
  `})

  btn(obj)

  btn({"Climb back up towards the village": () => go("cityEntrance")})

  btn({"Enter the swamp": () => go("nearSwamp")})

}
