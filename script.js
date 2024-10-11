var crsr = document.querySelector("#crsr");
var main = document.querySelector("html");
main.addEventListener("mousemove", function (click) {
    crsr.style.left = click.x + "px";
    crsr.style.top = click.y + "px";
});