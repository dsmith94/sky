Game.loon = {
  name: "green man",
  location: "nearSwamp",
  exitText: "Nice chatting with you",

  desc: () => {
    if (!hasMet("loon")) {
      p$(`
        
        A funny little green man is half sunk into the sludge, wearing a white laboratory cardigan and excitedly filling test tubes with
        muck. He appears to be having a good time, at any rate.
        
        `)
    } else {
      p$(`
        
        Professor Loon is still here, gathering more sludge into tubes.
        
      `)
    }
  },

  _: () => {
    p1$(
      `

    "Greetings!" said the green man. His eyes focus on you intently, big and black like a housefly's. "My name is Loon. Professor Loon, zoologist!
    You're just in time!
            
    `,

      `
    
    "Greetings!" said Professor Loon, waving a test tube in your direction.
            
    `
    )
    setName("Loon")

    b1$(`Just in time for what?`, () => {
      p$(`
        
        "Why, the discovery of a new species!" said Loon with a vast grin. "I, Professor Loon, have discovered a new form of life!"
        
        `)

      b$(
        `Is that so?`,
        `
        
        "Yes!" He scoops more and more sludge into tubes, which he stuffs into his apparently limitless cardigan. "Soon, I will be ready to share
        my discovery with the galaxy! At least, while there's still a galaxy to share it with."

        `
      )

      b$(
        `What is it?`,
        `
        
        "I can't reveal that yet," said Loon, "But I will very soon!"

        `
      )
    })

    b1$(
      `Nice to meet you`,
      `
    
    "Professor Thelonius Moon Loon, at your service!" He gave a fast wink. "Nice to meet a fellow adventurer. I suppose you came down in that
    ship the crashed earlier today!"
    
    `
    )

    b$(
      `Loon is an unusual name, where are you from?`,
      `
    
    "Oh, us Loons have been all over the galaxy for thousands of years. There's been Loons in politics, Loons in academia... And, chances are,
    if you've ever been on the Internet, you've met a few Loons."
    
    `
    )

    done("Have a good day scooping mud")
  },
}
