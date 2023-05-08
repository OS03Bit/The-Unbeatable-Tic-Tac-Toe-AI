let count = 0;
var box = [0, 0, 0, 0, 0, 0, 0, 0, 0];
function boxclick(boxid){
    let index = boxid.id;
    if(box[index] === 0){
        if(count%2 === 0){   
            var img = document.createElement("img");
            img.src = "Images/o.png";
            img.style.width = "35px";
            img.style.height = "35px";
            img.style.margin = "4vh auto";
            boxid.appendChild(img); 
            box[index] = 1;
        }
        else{
            var img = document.createElement("img");
            img.src = "Images/x.png";
            img.style.width = "35px";
            img.style.height = "35px";
            img.style.margin = "4vh auto";
            boxid.appendChild(img); 
            box[index] = 2;
        }
        check();
        count++;
    }
}
const compareArrays = (a, b) => {
    return JSON.stringify(a) == JSON.stringify(b);
};
function check(){
    let x = 1;
    let flag = 0;
    if((box[0]===box[1] && box[1] === box[2] && box[2] == x) || (box[3]===box[4] && box[4] === box[5] && box[5] == x) || (box[6]===box[7] && box[7] === box[8] && box[8] == x) || (box[0]===box[3] && box[3] === box[6] && box[6] == x) || (box[1]===box[4] && box[4] === box[7] && box[7] == x) || (box[2]===box[5] && box[5] === box[8] && box[8] == x) || (box[0]===box[4] && box[4] === box[8] && box[8] == x) || (box[2]===box[4] && box[4] === box[6] && box[6] == x)){
        // document.getElementById("page-heading").style.visibility = "hidden";
        // document.getElementById("game-set").style.visibility = "hidden";
        document.getElementById("win-page").style.visibility = "visible";
        document.getElementById('win-page').style.display = "content";
        document.getElementById('win-text').innerHTML = "O Wins";
        console.log("O Win");
        flag = 1
    }
    x = 2;
    if((box[0]===box[1] && box[1] === box[2] && box[2] == x) || (box[3]===box[4] && box[4] === box[5] && box[5] == x) || (box[6]===box[7] && box[7] === box[8] && box[8] == x) || (box[0]===box[3] && box[3] === box[6] && box[6] == x) || (box[1]===box[4] && box[4] === box[7] && box[7] == x) || (box[2]===box[5] && box[5] === box[8] && box[8] == x) || (box[0]===box[4] && box[4] === box[8] && box[8] == x) || (box[2]===box[4] && box[4] === box[6] && box[6] == x)){
        // document.getElementById("page-heading").style.visibility = "hidden";
        // document.getElementById("game-set").style.visibility = "hidden";
        document.getElementById("win-page").style.visibility = "visible";
        document.getElementById('win-page').style.display = "content";
        document.getElementById('win-text').innerHTML = "X Wins";
        flag = 2;
    }
    
    for(var i = 0; i<9; i++){
        if(box[i] == 0){
            flag = -1;
        }
    }
    if(flag==0){
        document.getElementById("win-page").style.visibility = "visible";
        document.getElementById('win-page').style.display = "content";
        document.getElementById('win-text').innerHTML = "Tie";
   }
}