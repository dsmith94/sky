Game.yates = {
  askedAboutName: false,

  _: () => {
    const nameQuestion = c$.askedAboutName
      ? "Tell me again why your name is Yates"
      : "So, I've never asked: why are you named *Yates*?"

    p$(`
          
        Yates is (literally) your second hand man; a 50/50 medley of robotic and organic components, cobbled into a hodge-podge of an android. 
        The bio stuff is cut-rate, to say the least, likely because he sustains every six hours or so with junk food and their abundant hydrocarbons.
        Thus, he constantly smells vaguely of processed cheese dust.
    
        Presently, he's trying to salvage what's left of your engine, landing gear, and
        emergency seagull repellent.
          
        `)

    b$(nameQuestion, () => {
      c$.askedAboutName = true
      p$(`
                  
            "Actually," said Yates, "My true designation is Cybernetic Reploid model 88, or CR-88.
            My first owner called my Crazy 8's, then my next owner called
            me Eights, and finally the last one called my Yates."
                  
        `)
    })

    b$(`Will you hurry up already?`, () => {
      setState("yates", "annoyed")
      p$(`"I'm working as fast as I can," he grumbled.`)
    })
    done(`Well, keep working, we've got to get off this rock`)
  },

  annoyed: () => {
    p$(`
      
      Yates glares at you as he keeps working. He seemed pretty annoyed.
      
      `)

    b$(
      `Can't you work any faster?`,
      `
      
      "I don't want to be stuck on this stupid planet, either," said Yates with a sour look.
      
      `
    )

    b$(`Thank you for working so hard, Yates`, () => {
      setState("yates", "_")
      p$(`
        
        "Thanks. I'm going as fast as I can."
        
        `)
    })

    done(`Well, keep working, we've got to get off this rock`)
  },
}
