

function getStarted() {
    Nav.go(Title.screen);
}



window.addEventListener("load", () => {
    setTimeout(() => {
        getStarted();
    }, 10);
});

