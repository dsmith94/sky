window.addEventListener("load", () => {
  g$ = { ...Game }
  createMenu()
  createPage()
  go("outsideShip")()
})
