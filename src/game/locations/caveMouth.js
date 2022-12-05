Game.caveMouth = () => {

    msg(`
    
    An ominous dark hole in the side of the mountain opens near the fringe of the swamp.
    The shadows within seem somehow blacker and more intense than normal.

    `)

    btn({"Enter the cave": () => {
        if (!g$.caveForceFieldOff) {
            msg(`
            
            OOF! As you approach the cave, you feel drawn in by an unseen force, then
            lifted off the ground, and finally dropped in mid-air exactly three meters
            to the left.
            
            `)
        } else {
            go('insideCave')()
        }
    }})

  btn({"Return to the swamp": go("nearSwamp")})

}