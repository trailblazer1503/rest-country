const toggle = document.getElementById('icon');
const body = document.querySelector('body');

toggle.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains('dark-theme')) {
        icon.src = "img/sun.png";
    } else {
        icon.src = "img/moon.png";
    }
}
