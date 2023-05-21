let el, x, y, tx = 0, ty = 0
el = document.querySelector("h1")

el.ondragstart = (e) => {
    x = e.x;
    y = e.y;
};

el.ondragend = (e) => {
    tx += e.x - x;
    ty += e.y - y;
    el.style.transform = `translate(${tx}px, ${ty}px)`
}