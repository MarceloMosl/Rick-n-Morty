function stop() {
    var stop = document.getElementsByTagName("audio")[0];
    stop.pause();
    stop.currentTime = 0;
}
function play() {
    var audio = document.getElementById("audio1");
    audio.play();
}
//-------------------------- Rick SANCHEZ
function stopRick() {
    var stop = document.getElementsByTagName("audio")[1];
    stop.pause();
    stop.currentTime = 0;
}
function playRick() {
    var audio = document.getElementById("audioRick");
    audio.play();
}
//--------------------------------- MORTY SMITH
function stopMorty() {
    var stop = document.getElementsByTagName("audio")[2];
    stop.pause();
    stop.currentTime = 0;
}
function playMorty() {
    var audio = document.getElementById("audioMorty");
    audio.play();
}
//-----------------------------Evil MORTY
function stopEvil() {
    let stop = document.getElementsByTagName("audio")[3];
    stop.pause();
    stop.currentTime = 0;
}
function playEvil() {
    let audio = document.getElementById("audioEvil");
    audio.play();
}