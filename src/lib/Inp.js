const Inp = {
  backButtonHidden: false,

  clear: () => {
    const e = document.getElementById("Buttons");
    e.innerHTML = "";
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
