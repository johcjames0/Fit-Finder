let colorArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let overIndex = 0;
let topIndex = 0;
let bottomIndex = 0;
const overColor = document.getElementById("overColor");
const topColor = document.getElementById("topColor");
const bottomColor = document.getElementById("bottomColor");
overColor.innerHTML = colorArray[overIndex];
topColor.innerHTML = colorArray[topIndex];
bottomColor.innerHTML = colorArray[bottomIndex];
function overNext() {
    if (overIndex >= colorArray.length-1) {
        overIndex = 0;
    }else{
        overIndex ++;
    }
    overColor.innerHTML = colorArray[overIndex];
}
function topNext() {
    if (topIndex >= colorArray.length-1) {
        topIndex = 0;
    }
    else {
        topIndex++;
    }
    topColor.innerHTML = colorArray[topIndex];
}
function bottomNext() {
    if (bottomIndex >= colorArray.length-1) {
        bottomIndex = 0;
    }else{
        bottomIndex++;
    }
    bottomColor.innerHTML = colorArray[bottomIndex];
}
function overPrev() {
    if (overIndex <= 0 ) {
        overIndex = colorArray.length-1;
    }else{
        overIndex--;
    }
    overColor.innerHTML = colorArray[overIndex];
}
function topPrev() {
    if (topIndex <= 0) {
        topIndex = colorArray.length-1;
    }else{
        topIndex--;
    }
    topColor.innerHTML = colorArray[topIndex];
}
function bottomPrev() {
    if (bottomIndex <= 0) {
        bottomIndex = colorArray.length-1;
    } else{
        bottomIndex--;
    }
    bottomColor.innerHTML = colorArray[bottomIndex];
}