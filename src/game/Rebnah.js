
Game.rebnah = {

    hasMet: false,
    hasTheToken: false,

    intro: () => {

        g$.rebnah.hasMet = true;
        g$.rebnah.hasTheToken = true;
        once$(`

        "Welcome, greetings, and many happy *frojniks* to you, off-worlder!" said the hologram with a smile. She wears a hat
        with the words Ask Me About My Home Planet embroidered in large red letters.

        "I welcome you to Planet Snorlag, the friendliest world this side of Mutter's Third Arm! My name is Rebnah—pleased to meet you! I am
        here to make sure your stay is simply Snor-tastic!"

        With a wave of her suckered hand, something cold and metallic materializes in your pocket. "Be sure to read the fine print on that token!" she said.
        
        `,
        
        `
        
        Rebnah the hologram watches you with great enthusiasm. "What can I do to make your stay even more *Snor-mazing*?"
        
        `
        
        )

        if (g$.rebnah.hasTheToken) {
            i1$(`Read the token`, () => {
                m$(`
                
                ADMIT TWO FOR COMPLIMENTARY SHOW AT SNORLAGIAN CINEMAS

                Down below, in the fine print, you notice the token expired around ten Earth years ago.

                Rebnah spies you reading the token. "Not bad, huh? Sounds like a great time when you make a new friend on our 
                planet!" Then she leans in close. "Strictly between you and me, never date a Kevoriian. They're technically mollusks,
                and their ichorous secretions are poisonous to humanoids. Also, they're slimy kissers.
                
                `)
            });
        }

        i$('See you later', () => {
            go$(g$.city.entrance)
        })

    }

}
