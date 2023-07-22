function solid(i) {
    $(i).toggleClass("fa-regular");
    $(i).toggleClass("fa-solid");
}

function srcswitch(image) {
    image.setAttribute("src", "assets/imgs/instaweb-inverted.png");
}

function srcunswitch(image) {
    image.setAttribute("src", "assets/imgs/instaweb-lines.png");
}

function title(title) {
    $(title).toggleClass("visible-title");
}

function roll(i) {
    $(i).toggleClass("rotate");
}