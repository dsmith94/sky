const ShowOnce = (showFirst, showLater) => {
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
    if (Array.isArray(showLater)) {
      rnd$(showLater);
    } else {
      m$(showLater);
    }
  } else {
    g$[id] = true;
    m$(showFirst);
  }
};
