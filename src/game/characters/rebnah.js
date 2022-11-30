/** @type {CharacterType} */
Game.rebnah = {
  exitText: "Nice chatting with you",
  hasTheToken: false,
  location: "cityEntrance",

  name: "greeter hologram",

  talkLabel: () => {
    const [name, a, the, that] = getName('rebnah')
    return `Chat with ${the} ${name}`
  },

  notMet: () => {
    const d = `She has numerous arms in inconvenient places and a noggin which resembles that of a reasonably pleased purple rhinoceros.`
    return `
            
      One of those weird greeter holograms has popped out of thin air. ${d}
            
      `
  },

  desc: () => `
              
        Rebnah the greeter hologram waves to you cheerily, which is impressive considering her vast quantity of arms. ${
          roll(25)
            ? `She 
              emits a thunderous snort and rubs her fantastic nose.`
            : ""
        }
              
    `,

  talk: () => {
    c$.hasTheToken = true
    p1$(
      `
  
          "Welcome, greetings, and many happy *frojniks* to you, off-worlder!" said the hologram with a smile. She wears a hat
          with the words Ask Me About My Home Planet embroidered in large red letters.
  
          "I welcome you to Planet Snorlag, the friendliest world this side of Mutter's Third Arm! My name is Rebnah—pleased to meet you! I am
          here to make sure your stay is simply Snor-tastic!"
  
          With a wave of her suckered hand, something cold and metallic materializes in your pocket. "Be sure to read the fine print on that token!" she said.
          
          `,

      `
          
          Rebnah the hologram watches you with great enthusiasm. "What can I do to make your stay even more *Snor*-mazing?"
          
          `
    )
    setName("Rebnah")

    b$(`Tell me about your home planet`, () => {
      p1$(
        `
        
        "Oh boy, I can't wait to tell you all about SNORLAG!" said Rebnah with breathless enthusiasm. “Though, there's not much happening right
        now. You see, the two primary species of this planet—Kevoriians and Zogtarians—are at odds with each other and they've reached a stalemate.
        The Kevoriians have a Reality-Time Detonator, which will wipe out all life in the universe, and the Zogtarians have a Time-Reality Disruptor,
        which will prevent all life from ever existing in the first place.
        
        “So there's nobody really here right now, everybody is down at the festival trying to get one last party in before all of
        time and space crashes in on itself.”
        
        `,
        `
  
        “Not much happening today. The Kevoriians and Zogtarians are about to destroy us all.
        The Kevoriians have a Reality-Time Detonator, which will wipe out all life in the universe, and the Zogtarians have a Time-Reality Disruptor,
        which will prevent all life from ever existing in the first place.
        
        “So everybody is down at the festival trying to get one last party in. I'm a hologram, so technically I never existed in the first place.”
        
        `
      )
    })

    b$(
      `What species are you?`,
      `
      
      "I'm a hologram, and not designed to mimic one species per se. Actually, my physical form was designed by committee. They gave me the
      most arms ever, so I give the best hugs!" She pauses and looks down at her numerous appendages. "Though, I'll admit, finding
      compatible sweaters is a challenge."
      
      `
    )

    if (c$.hasTheToken) {
      b1$(`Read the token`, () => {
        p$(`
                  
                  ADMIT TWO FOR COMPLIMENTARY SHOW AT SNORLAGIAN CINEMAS
  
                  Down below, in the fine print, you notice the token expired around ten Earth years ago.
  
                  Rebnah spies you reading the token. "Not bad, huh? Sounds like a great time when you make a new friend on our 
                  planet!" Then she leans in close. "Strictly between you and me, never date a Kevoriian. They're technically mollusks,
                  and their ichorous secretions are poisonous to humanoids. Also, they're slimy kissers.
                  
                  `)
      })
    }

    done("See you later")
  },

  afterShipDestroyed: () => {
    p$(`
              
    Rebnah the greeter hologram offers a wan smile, seemingly aware that you're having a rough day.
    
    `)

    b$(
      `Do you just pop in and out of existence like that all the time?`,
      () => {
        c$.exitText = "Well, it's been a... pleasure, I guess"

        p$(`
      
      "Oh no." Rebnah's gaze turned dark. "Being stored in computer memory is like torture. Imagine an eternity of suffering, never living
      but never really dying, where every inch of your person is in unimaginable pain, and your internal 
      organs are jostled inside you like hot rocks and battery acid in a blender."
      
      `)

        b$(
          `That's... horrific...`,
          `
      
      "Yeah but you get used to it."
      
      `
        )
      }
    )

    done(c$.exitText)
  },
}
