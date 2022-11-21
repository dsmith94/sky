const Inp = {
  backButtonHidden: false,

  clear: () => {
    const e = document.getElementById("Buttons");
    e.innerHTML = "";
  },

  displayOnce: (label, callback) => {

    function stringToHash() {
      var hash = 0;
      if (label.length == 0) {
        return hash;
      }
      for (i = 0; i < label.length; i++) {
        char = label.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
      return hash;
    }

    const id = `d${stringToHash()}`;

    if (!game[id]) {
      Inp.add(label, () => {
        game[id] = true;
        if (typeof callback === 'string') {
          Msg.set(callback);
        } else {
          callback();
        }
      });
    }

  },

  add: (label, callback) => {
    const e = document.getElementById("Buttons");
    if (e) {
      label = label.trim();
      const b = document.createElement("button");
      b.onclick = () => {
        Msg.clear();
        Inp.clear();
        Inp.backButtonHidden = false;
          if (typeof callback === 'string') {
            Msg.set(callback);
          } else {
            callback();
          }
          if (!Inp.backButtonHidden) {
            Inp.add("Back", () => {
              Nav.go(Nav.lastCallback);
            });
          }
          Inp.backButtonHidden = true;  
      };
      b.className = "Choice";
      b.innerHTML = skylight(label);
      e.appendChild(b);
    }
  },
};
