const clearScreen = () => {
  document.getElementById("page").innerHTML = ""
  document.getElementById("card").innerHTML = ""
}

const p$ = (element) => {
  if (typeof element === "string") {
    document.getElementById("page").innerHTML += skylight(element)
  } else if (typeof element === "function") {
    element()
  }
}