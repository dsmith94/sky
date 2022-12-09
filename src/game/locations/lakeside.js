/** @type {LocationType} */
Game.lakeSide = () => {
  const [name, a, the] = getName("spaceKing")

  msg(`
    
    At the bottom of the valley by the village is a clear, blue lake. Over the lake is an enormous sign, so massive
    it cannot possibly be floating on its own but appears to be doing so effortlessly.
    Back up the path is the village, and not far along the shore the lake muddies into a swamp.

  `)

  env(() => roll(25) &&
    pick([
      "The wind creates soft little ripples over the lake.",
      "A gentle breeze blows peacefully.",
      "Some distant animal squawks mournfully from the valley below.",
    ]))

  btn({"Read the incredible sign": `
  
    The vast sign says in every known language in the universe, including ✧❖➶⨇⨖⨿⩉:
  
    **Here He Is**

    A gigantic red arrow points to ${the} ${name}.
  
  `})


  btn({"Climb back up towards the village": go("cityEntrance")})

  btn({"Enter the swamp": go("nearSwamp")})

}
