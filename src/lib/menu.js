
let menuShown = false

const toggleMenu = () => {
    if (!menuShown) {
        const menuDiv = document.createElement("div")
        menuDiv.className = "menu"
        const innerMenu = document.createElement("div")
        innerMenu.style = "max-width: 400px; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center;"
        const closeButton = document.createElement("button")
        closeButton.style = "aspect-ratio: 1; font-size: 24pt"
        closeButton.innerText = "🡹"
        closeButton.onclick = () => {
            menuShown = false
            menuDiv.remove()
        }
        innerMenu.appendChild(closeButton)
        menuDiv.appendChild(innerMenu)
        document.body.appendChild(menuDiv)
    }
}

