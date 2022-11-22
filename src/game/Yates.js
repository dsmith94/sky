Game.yates = {
  askedAboutName: false,

  intro: () => {
    const nameQuestion = g$.yates.askedAboutName
      ? "Tell me again why your name is Yates"
      : "So, I've never asked: why are you named *Yates*?";

    m$(`
        
        Yates, your second hand man (literally), is the kind of android who is made up in part of cut-rate biological components,
        which he sustains with junk food for their massive levels of hydrocarbons. Thus, he constantly smells vaguely of
        processed cheese dust.
    
        Presently, he's trying to salvage what's left of your engine, landing gear, power cell, and
        emergency seagull repellent.
        
        `);

    i$(nameQuestion, () => {
      g$.yates.askedAboutName = true;
      m$(`
                
                "Actually," said Yates, "My true designation is YOT-C. I actually don't remember when I started going by
                Yates. I suspect an earlier employer couldn't pronounce the C, but that was too many memory wipes ago."
                
                `);
    });

    i$("Well, keep working, we've got to get off this rock", () => {
      go$(g$.myShip.outside);
    });
  },
};
