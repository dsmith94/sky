
const Title = {
    screen: () => {
        m$(`
        
            Title Screen

        `)

        once$(
            `The cat waits`,
            [
                `foo`,
                `bar`,
                `foozle`,
                `muddle`
            ]    
        )

        i$('Start', () => {
            game = {...Game};
            console.log(game);
            go$(game.intro.firstPage);
        })

        i$('About', () => Nav.go(Title.about))
    },

    about: () => {
        m$(`

            About this book

        `)

        i$('OK Then', () => go$(Title.screen))

        i$('About', `Why Cat!!`)
    }
}

