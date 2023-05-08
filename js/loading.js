let audio = document.getElementById('loadaudio');
console.log(audio);
function loadpage(){
    document.getElementById('btn-play').style.display = "none";
    document.getElementById('btn-play').style.visibility = "hidden";
    // document.getElementById('maindiv').style.display = "content";
    // document.getElementById('maindiv').style.visibility = "visible";
    showdiv1();
}
function showdiv1() {
    setTimeout(function () {
        document.getElementById("Dline1").style.visibility = "visible";
        // document.getElementById('Dline2').style.display = "content";
        audio.play(); 
        // console.log("1");
    }, 1000);
    setTimeout(function () {
        document.getElementById("Dline2").style.visibility = "visible";
        // document.getElementById('Dline2').style.display = "content";
        audio.play(); 
        // console.log("1");
    }, 2000);
    setTimeout(function () {
        document.getElementById("x1").style.visibility = "visible";
        document.getElementById("x2").style.visibility = "visible";
        document.getElementById("o1").style.visibility = "visible";
        document.getElementById("o2").style.visibility = "visible";

        
        // document.getElementById('Dline2').style.display = "content";
        audio.play(); 
        // console.log("1");
    }, 3000);
    setTimeout(function () {
        document.getElementById("Dline1").style.visibility = "hidden";
        document.getElementById("Dline2").style.visibility = "hidden";
        document.getElementById("x1").style.visibility = "hidden";
        document.getElementById("x2").style.visibility = "hidden";
        document.getElementById("o1").style.visibility = "hidden";
        document.getElementById("o2").style.visibility = "hidden";
        // document.getElementById("page-heading").style.visibility = "visible";
        // document.getElementById("game-set").style.visibility = "visible";
        window.location.href = './home.html';
    }, 4000);
    

}
function refresh(){
    location.reload();
};
