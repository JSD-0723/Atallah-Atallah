// Dark Theme
var darkMode = document.getElementById("dark-mode");
darkMode.onclick = function () {
    document.body.classList.toggle("dark-theme");

    var icon = document.getElementById("moon")
    if (document.body.classList.contains("dark-theme")) {
        icon.name = "sunny-outline";
    } else {
        icon.name = "moon-outline";
    }
}

// Show & Hide Favourites Card Bar
function toggle() {
    var favCardBar = document.getElementById('hide-fav-bar')

    if (favCardBar.style.display === 'flex') {
        favCardBar.style.display = 'none';
    } else {
        favCardBar.style.display = 'flex';
    }
}