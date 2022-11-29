Game.shipRepairShop = () => {
    p$(`
       
    The road dips a bit and ends by a large wide building with a tall billboard, which reads: 

    <center>*SNORLAG SHIP REPAIR*</center>

    <center>Best spacecraft care anywhere</center>

    Attached to the door is a haphazardly scribbled scrap of a sign.
            
    `)
    
    b$(
      `Read the sign on the door`,
      `
      
      <center>*Closed until the universe ends*</center>

      `
    )
    b$(
      `Enter the repair shop`,
      `
      
      The door is shut and locked tight.
      
      `
    )
    b$(`Return to the village`, () => go("city"))
  }
  