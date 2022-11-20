
const Title = {
    screen: () => {
        Msg.set(`

            <b>Hey, It Works!</b>

        `)

        Inp.add('Start', () => {
            game = JSON.parse(JSON.stringify(Game));
            Msg.set(`Nooo!!`);
        })

        Inp.add('About', () => Nav.go(Title.about));
    },

    about: () => {
        Msg.set(`

            About this book

        `)

        Inp.add('OK Then', () => Nav.go(Title.screen))

        Inp.add('About', `Why Cat!!`);
    }
}

