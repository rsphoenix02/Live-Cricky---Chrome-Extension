const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("focus", function () {
    this.placeholder = "";
});

searchInput.addEventListener("blur", function () {
    this.placeholder = "Search Google";
});