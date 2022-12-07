/** @type {LocationType} */
Game.city = () => {
    msg(`
          
    A narrow metal road runs in straight paths between squat stucco buildings. The streets are deserted, though you can
    hear sounds of a party nearby. Posted over the street sign is hastily scrawled message on what appears to be
    white party supply paper. 
          
    `)
  
  env(() => roll(25) && pick([
    'Boom! Boom! Boom! The base from the micro-sized festival echoes down the street.',
    `You can hear what sounds like tiny screams from the festival ahead. Either people are
      depressed over the end of the universe or they're having a pretty good time.`,
    `The music peaks from the festival, followed by a small but thunderous cheer.`
  ]))

    btn({"Read the hastily scrawled sign": `
    
      <center>THE LAST PARTY AT THE END OF THE UNIVERSE STRAIGHT AHEAD</center>

      Warning: pregnant women and Ungarians with live eggs should not enter compression fields.
    
    `})

  
    btn({"Find the repair shop": go("shipRepairShop")})

    btn({"Enter the library": go('library')})

    btn({"Walk to the festival": () => {
      msg(`Your skin tingles a bit as you pass through a compression field and
      are shrunk to a couple of millimeters tall
      so as to enter the venue.`)
      btn({"Hey that tickles": go("festival")})
    }})
    btn({"Leave the village": go("cityEntrance")})
  }
  