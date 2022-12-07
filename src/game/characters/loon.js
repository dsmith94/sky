/** @type {CharacterType} */
Game.loon = {
  name: "green man",
  location: "nearSwamp",
  exitText: "Nice chatting with you",

  notMet: () => `
  
  A funny little green man is half sunk into the sludge, wearing a
  white laboratory cardigan and excitedly filling test tubes with 
  muck. He appears to be having a good time, at any rate.
  
  `,

  desc: {
    "talk": `Professor Loon is still here, gathering more sludge into tubes. `,
    "annoyed": `Professor Loon is in mud, looking very annoyed about something`
  },

  talk: () => {

    msg([`

    "Greetings!" said the green man. His eyes focus on you intently, big and black like a housefly's. "My name is Loon. Professor Loon, zoologist!
    You're just in time!"

    He appears to be standing directly over a large, useful-looking metal crank.
            
    `, `
    
    Professor Loon waves a test tube cheerfully in your direction. He appears to be standing
    directly over a large, useful-looking metal crank.
            
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

    hasSaid("Just in") && btn({"You really can't even give me a tiny hint what you're working on?": () => {

      msg([`
    
      Loon examines you with a mischievous glint in his eye. "Two words: musical... chiggers!"
    
      `,`

      "I fear I've said too much already," said Loon.
      
      `])

    }})


    once({"Nice to meet you": `
    
    "Professor Thelonius Moon Loon, at your service!" He gave a fast wink. "Nice to meet a fellow adventurer. I suppose you came down in that
    ship the crashed earlier today!"
    
    `})

    btn({"Loon is an unusual name, where are you from?": `
    
    "Oh, us Loons have been all over the galaxy for thousands of years. There's been Loons in politics, Loons in academia... And, chances are,
    if you've ever been on the Internet, you've met a few Loons."
    
    `})

    btn({
      "Hey, can I see that crank for a second?": () => {
        
        msg(`
        
        "Of course," said Loon, "Except that I can't move a muscle! Even the slightest
        disruption could be a disaster to science!"

        `)

        btn({"Please? I promise I won't hurt your experiment!": `
        
        "Even the very *slightest* movement could ruin years of work!" cried Loon.
        "I can't stop now, even if the universe itself were ending!"
        
        `})

        btn({"I don't think you're going to find anything tromping in the mud anyway": `
        
        "Ha!" scoffed Loon. "That's what they told Jed Clampett!"
        
        `})

        btn({"Fine. Be that way": `

        "We all make sacrifices for the sake of science, my friend," nods Loon.
        
        `})

      }})

    hasMet('merrick') && hasSaid('Just in') &&
      btn({
        "You know, that Merrick guy at the festival seems like quite a scientist himself": () => {
          
          msg(`
          
          Loon snorts. "I can assure you, my friend, Merrick is *no* scientist of any sort."
          
          `)

          btn({"I don't know. He seems on the edge of a breakthrough!": () => {

            msg(`
            
            Loon suddenly appears to be very nervous. "Hmmm. Wouldn't hurt to take a break
            and head down to the festival, I suppose. Excuse me."

            He dashes off in a huff.

            `)

            setLocation("")
            setState("annoyed")
            done('Well OK then')

          }})

          btn({"If you say so": `
          
          "I'm not worried about competing with that so-called mixologist,"
          said Loon with a chuckle. "We're doing actual science here."
          
          `})

        }
      })

    done("Have a good day scooping mud")
  },
  annoyed: () => {
    msg(`
    
    "I'm not in the mood to chat right now," said Loon with a scowl.
    
    `)

    done("Alrighty")
  }
}
