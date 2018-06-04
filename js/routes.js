Path.map("#/login").to(function() {
    App.FullScreen.showScreen("screens/login.html");
});
Path.map("#/welcome").to(function() {
    $("#stage").load("screens/welcome.html");
});
Path.map("#/team").to(function() {
    $("#stage").load("screens/team.html");
});
Path.root("#/login");
Path.listen();