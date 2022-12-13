
/** @type {CharacterType} */
Game.mavis = {
    name: "giant brain in a jar",
    location: 'library',
    exitText: "Thanks for your help",
    hasMet: false,

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

        btn("Why haven't you got any books?", () => {

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
        })

        hasSaid('any books') && btn("Are you really a giant brain?", () => {

            msg(`
            
            "I should hope that should be obvious..." said Mavis with an edge of annoyance.
            "Why do you ask?"
            
            `)

            btn("You must get asked some tough questions", () => {

                msg(`
                
                "Sure," said Mavis. "Mostly about the Dewey Decimal System. Nobody
                understands the Dewey Decimal System."
                
                `)

                btn("So what's the hardest question you've ever been asked?", () => {
                
                    msg(`"Once," said Mavis, "A snotty 10 year-old Zogtarian came in and asked me a riddle.`)

                    btn("Was it what's the difference between a coffee mug and a doughnut?", `
                    
                    Mavis grumbled: "No, he was a Zogtarian, not a Topzoidian."
                    
                    `)

                    btn("Was it about how to create a fat-free Mayonnaise-replacement product that delivers on value and flavor?", `
                    
                    "Of course not. We'd already invented Hidden Valley dressing at that point."
                    
                    `)
                
                    btn("What was it?", () => {
                    
                    msg(`"Only this," said Mavis with a serious tone, "Why is a raven like a writing desk?"`)

                    btn("That's it?", () => {
                        
                        setVal("writingDesk", true)

                        msg(`

                        Mavis chuckled. "Oh sure, it seems simple. But it even stumped the Old Man in the Cave."
                        
                        `)

                    })
                    
                    })

                })

                btn("Do you understand the Dewey Decimal System?", `
                
                "Erm... Of course I do," Mavis stammered. "Don't you have something better to do then bug me?"
                
                `)

            })

            btn("Oh, I just had to ask to be sure.", `
            
            "Your powers of observation have not yet ceased to amaze," said Mavis.
            
            `)

        })

        done(c$.exitText)

    }

}