/** @type {CharacterType} */
Game.loon = {
  name: "green man",
  location: "nearSwamp",
  exitText: "Nice chatting with you",

  notMet: () => msg(`
  
  A funny little green man is half sunk into the sludge, wearing a
  white laboratory cardigan and excitedly filling test tubes with 
  muck. He appears to be having a good time, at any rate.
  
  `),

  desc: () => msg(`

  Professor Loon is still here, gathering more sludge into tubes.
  
  `),

  talk: () => {

    msg([`

    "Greetings!" said the green man. His eyes focus on you intently, big and black like a housefly's. "My name is Loon. Professor Loon, zoologist!
    You're just in time!
            
    `, `
    
    "Greetings!" said Professor Loon, waving a test tube in your direction.
            
    `])

    setName("Loon")

    once({"Just in time for what?": () => {
      msg(`
        
        "Why, the discovery of a new species!" said Loon with a vast grin. "I, Professor Loon, have discovered a new form of life!"
        
        `)

      btn({"Is that so?": `
        
        "Yes!" He scoops more and more sludge into tubes, which he stuffs into his apparently limitless cardigan. "Soon, I will be ready to share
        my discovery with the galaxy! At least, while there's still a galaxy to share it with."

      `})

      btn({"What is it?": `
        
        "I can't reveal that yet," said Loon, "But I will very soon!"

      `})
    }})

    once({"Nice to meet you": `
    
    "Professor Thelonius Moon Loon, at your service!" He gave a fast wink. "Nice to meet a fellow adventurer. I suppose you came down in that
    ship the crashed earlier today!"
    
    `})

    btn({"Loon is an unusual name, where are you from?": `
    
    "Oh, us Loons have been all over the galaxy for thousands of years. There's been Loons in politics, Loons in academia... And, chances are,
    if you've ever been on the Internet, you've met a few Loons."
    
    `})

    done("Have a good day scooping mud")
  },
}
