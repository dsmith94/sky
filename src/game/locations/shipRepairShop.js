/** @type {LocationType} */
Game.shipRepairShop = () => {

  msg(`
       
    The road dips a bit and ends by a large wide building with a tall billboard, which reads: 

    <center>*SNORLAG SHIP REPAIR*</center>

    <center>Best spacecraft care anywhere</center>

    Attached to the door is a haphazardly scribbled scrap of a sign.
            
  `)
    
  btn({"Read the sign on the door": `
      
    <center>*Closed until the universe ends*</center>

  `})
    
  btn({"Enter the repair shop": `
      
    The door is shut and locked tight.
      
  `})

  btn({"Return to the village": go("city")})

}
  