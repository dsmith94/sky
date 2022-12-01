/** @type {CharacterType} */
Game.merrick = {
    name: "frat scientist",
    exitText: "Uh, carry on I guess",
  
    desc: () => {
      if (!hasMet("merrick")) {
        p$(`
          
          A frat boy with no eyes and a huge antenna dressed as a scientist is busily mixing drinks at the bar.
          He appears to be very serious about what he's doing.
          
          `)
      } else {
        p$(`
          
          Merrick is here, mixing new cocktails as though his life depended on it.
          
        `)
      }
    },
  
    talk: () => {
      p1$(
        `

        The frat scientist regards you very studiously. "Welcome, party-goer," he said spreading his appendages. "Welcome to the end
        of the universe. I, Merrick, am a skilled mixologist, and perhaps your last chance at a good time before it's all over."

              
      `,
  
        `
      
        Merrick seems too absorbed in his laboring over the cocktail bar to give you too much attention.
              
      `
      )
      setName("Merrick")

      b$(`What are you mixing?`, () => {

        p$(`
        
        "The greatest cocktail in the history of our time-space continuum," said Merrick with an air of mystery.
        "Perhaps, in this twilight of our existence, we shall bear witness to the last great
        work of quaffable art. Soon, my greatest discovery will be unleashed at this very party."
        
        `)

        b$(`Let me try it`, () => {

          p$(`

          You take a sip...
          
          A crushing wave from the hollow of your soul emerges, rising higher and higher,
          while Strauss' Thus Spoke Zarathustra played on hundred theremins reaches a crescendo in
          your head...
          
          `)

          b$('Blarrf!', () => {
            p$(`
            
            You take one sip, and then another. Not bad!
            
            [Your overall life span has decreased by several minutes.]
            
            `)
          })

          b$('Huuurggg!', () => {
            p$(`"Not perfect yet," mumbled Merrick. "Needs more absinthe and strychnine."`)
          })

          b$(`Excuse me. Can you direct me to the nearest bipedal-friendly
          porcelain commode?`, () => {
            p$(`Merrick slowly transforms into an enormous Kafkaesque toilet. "What did you
            say again?" he asked. His seat and lid were acting as a tongue and mouth.`)
          })

        })

        b$(`It looks like scummy swamp water`, `
        
        "Wow, you're a mixologist as well?" said Merrick, obviously impressed. "Not bad."
        
        `)

      })
  
      done(c$.exitText)
    },
  }
  