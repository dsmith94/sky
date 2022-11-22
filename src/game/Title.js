
const Title = {
    screen: () => {
        m$(`
        
            <h1>We Might All Die on Snorlag</h1>
            <h3>A game by spaceflounder</h3>

        `)

        i$('Start', () => {
            g$ = {...Game};
            go$(g$.intro.firstPage);
        })

        i$('About', () => Nav.go(Title.about))
    },



    about: () => {
        m$(`

            Why is Space King hanging around on the Planet Snorlag? Is all life in (our) universe about to end? And who would win:
            a faster-than-light spaceship, or a seagull?

            These and other burning questions will be answered after your craft makes a sudden "emergency landing." Have you ever
            wanted to save the universe? Don't kiss any Kevoriians.

        `)

        i$('OK Then', () => go$(Title.screen))

    }
}

