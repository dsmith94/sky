const Nav = {
  lastCallback: () => {},

  go: (callback) => {
    Inp.backButtonHidden = true;
    callback();
    Nav.lastCallback = callback;
  },
};
