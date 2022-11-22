
const Msg = {
  clear: () => {
    const e = document.getElementById("Output");
    e.innerHTML = '';
  },

  add: (elements) => {
    const e = document.getElementById("Output");
    if (e) {
      elements = elements.split('\n').map(f => f.trim()).join('\n').split("\n\n").filter(f => f !== '');
      for (const el of elements) {
        const p = document.createElement("p");
        p.innerHTML = skylight(el);
        e.appendChild(p);
      }
    }
  },

  set: (elements) => {
    Msg.clear();
    Msg.add(elements);
  },
};
