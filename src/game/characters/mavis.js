
/** @type {CharacterType} */
Game.mavis = {
    name: "giant brain in a jar",
    exitText: "Thanks for your help",
    location: 'library',

    superMegaBlastLearning: false,
    bookAskCount: 0,

    notMet: () => `
    
    In the corner, a giant brain in a tall cylindrical jar stands
    attached to a long panel of dials and lights. Beneath the glass is a small
    brass plaque which reads: "The Librarian."
    
    `,

    desc: () => `
    
    Mavis regards you with a slight throbbing of her prefrontal lobe.
    
    `,

    talk: () => {

        setName('Mavis')
        msg([`
        
        "Greetings, traveler," said the humongous brain. "My name is Mavis. I am the
        librarian of this facility."
        
        `, `
        
        "Welcome, traveler," said Mavis. "How can I guide your cerebral journeys today?" 
        
        `])

        btn({"Why haven't you got any books?": () => {

            if (c$.bookAskCount < 2) {
                c$.bookAskCount += 1;
            }

            msg([`
            
            "Our collection is all around you," said Mavis with a pulse of her choroid plexus.
            "Books, on paper, are archaic and wear out. We here on Snorlag consume literature
            through subharmonic vibrations emitting from the crystals in the walls around you.
            Though, I understand how hard it can be for a limited organism like yourself 
            to engage with such an experience.
            
            `, `
            
            "I told you," said Mavis. "The collection exists in vibrations from the crystals,
            not pulped on dead plant life. Though, you might be able to use the Super MegaBlast
            Learning Hat.
            
            `])
        }})

        hasSaid('any books') && btn({"Are you sure you don''t have any books?": `
        
        "It's not that kind of library," said Mavis.
        
        `})


        if (c$.bookAskCount > 1) {

            btn({"What's the Super MegaBlast Learning Hat?": () => {

                c$.superMegaBlastLearning = true;
                msg(`"I shouldn't even mention it," said Mavis, "Because even if you survive
                it, you'll lose everything you learned in like half an hour.`)

            }})

        }

        (timesPressed("What's the Super MegaBlast Learning Hat?") > 0) && btn(
            {
                "Let me try the hat!": [
                    `"You could fry your brain, human," said Mavis.`,
                    `"I'm serious about the whole brain-frying thing," said Mavis with a growing
                    edge in her voice.`,
                () => {
                    msg(`Ok, you've had it!`)
                }
        ]})

        done(c$.exitText)

    }

}