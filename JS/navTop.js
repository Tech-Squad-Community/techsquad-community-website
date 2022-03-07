navtbut = document.getElementById("navtbut");

var navToTop = function () {
var y = window.scrollY;
if (y >= 220) {
    navtbut.className = "appear";
} else {
    navtbut.className = "disappear";
}
};

window.addEventListener("scroll", navToTop);