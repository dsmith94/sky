
const superMegaBlastLearningConversation = () => {

    btn({"Let me try the hat!": () => {
        (timesPressed() < 2) ?
            msg(`No!`)
            :
            msg(`OK.`)
    }})

}

/** @type {CharacterType} */
Game.mavis = {
    name: "giant brain in a jar",
    exitText: "Thanks for your help",
    location: 'library',

    superMegaBlastLearning: false,
    bookAskCount: 0,

    notMet: () => `
    
    In the corner, a giant brain in a tall cylindrical jar
    attached to a long panel of dials and lights. Beside the glass is a small
    brass plaque which reads: "The Librarian."
    
    `,

    desc: () => `
    
    Mavis regards you with a slight throbbing of her prefrontal lobe.
    
    `,

    talk: () => {

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
            Though, I understand that it can be hard for a—creature, such as yourself, to engage
            with such an experience.
            
            `, `
            
            "I told you," said Mavis. "The collection exists in vibrations from the crystals,
            not pulped on dead plant life. Though, you might be able to use the Super MegaBlast
            Learning Hat.
            
            `])
        }})

        if (c$.bookAskCount > 1) {

            btn({"What's the Super MegaBlast Learning Hat?": () => {

                c$.superMegaBlastLearning = true;
                msg(`"I shouldn't even mention it," said Mavis, "Because even if you survive
                it, you'll lose everything you learned in like half an hour.`)

            }})

        }

        (c$.superMegaBlastLearning) && superMegaBlastLearningConversation()

        done(c$.exitText)

    }

}