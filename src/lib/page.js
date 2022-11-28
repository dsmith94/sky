const clearScreen = () => {
  document.getElementById("page").innerHTML = ""
  document.getElementById("card").innerHTML = ""
}


const p1$ = (showFirst, showLater) => {
  function stringToHash() {
    var hash = 0;
    if (showFirst.length == 0) {
      return hash;
    }
    for (i = 0; i < showFirst.length; i++) {
      char = showFirst.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash;
  }

  const id = `i${stringToHash()}`;

  if (g$[id]) {
    p$(showLater);
  } else {
    g$[id] = true;
    p$(showFirst);
  }
};

const p$ = (element) => {
  if (typeof element === "string") {
    document.getElementById("page").innerHTML += skylight(element)
  } else if (typeof element === "function") {
    element()
  }
}
