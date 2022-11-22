Game.spaceKing = {
  preventWar: false,

  intro: () => {
    once$(
      `
        
        A man stands before you, but more than merely a man. He reminds you of a mix of Hercules and Adonis, only ten times more
        ripped. His solemn expression smacks of both seriousness and kind benevolence.

        "Greetings," he said in rich theatrical tones. He paused for effect. "I am a nearly omnipotent entity in a form you are
        assuredly comfortable with. My name... is Space King."

        The stars above seem to whisper "Space King" in hushed tones as he says the words.
        
        `,

      `
        
        Space King stands before you, clad in a magnificent chartreuse toga. He favors you with a gaze of kindly regard befitting a much lesser life form.

        `
    );

    i1$(
      `Never heard of you`,
      `
        
        Space King's eyes light with a kind of greenish fire that gives you a slight tremble. "Well," he said, "Like as not, I'm very important."
        
        `
    );

    i$(
      `Nice to meet you`,
      `
        
        "It is, isn't it," said Space King. "It is very nice to meet me, of course. I'm thinking of adding a dash to my name. You know,
        Space-King. It sounds more grand and purposeful." His hair blows majestically in the wind.
        
        `
    );

    g$.spaceKing.preventWar &&
      i$(
        `So what are you doing to prevent war?`,
        `
              
              "Sadly, very little at the moment," said Space King, "For my rheumatism is getting the better of me right now.
              That's why I'm standing by this lake, attempting to get some fresh air."
              
              `
      );

    i1$(`What are you doing *here* of all places?`, () => {
      g$.spaceKing.preventWar = true;
      m$(`
        
        "A fair question," nodded Space King. “After all, why should a being of my incredible talent be relegated to dealing with such limited
        mortals?

        “Well, the answer is simple. Any second, war will erupt on this planet that will engulf the universe. My role is to prevent billions
        from dying. The catastrophe about to take place is potentially greater than that of Smellus IV.”
        
        `);

      i$(
        "Smellus IV?",
        `
        
            “Ah, Smellus IV. The indigenous creatures had no vocal cords, so their whole civilization learned to communicate with finely 
            honed intestinal odors. In a stupendously bad bit of schedule overlap, the Great Interstellar Peace Talks on Smellus took place on
            Taco Tuesday.

            “Then, in an attempt to resume the Talks, a well-intentioned but misguided diplomat purchased an elaborate catered lunch
            for the entire event, from Arby's.” Space King shook his head. "Tragic." 
        
        `
      );
    });
  },
};
