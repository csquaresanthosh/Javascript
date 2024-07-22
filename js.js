function big(){
    var size = document.getElementById('hhh').style.fontSize;
    var num = size.split("px");
    num[0]++;
    document.getElementById('hhh').style.fontSize = num[0] + "px";
    document.getElementById('ps').innerHTML = num[0];
}
function small(){
    var size = document.getElementById('hhh').style.fontSize;
    var num = size.split("px");
    num[0]--;
    document.getElementById('hhh').style.fontSize = num[0] + "px";
    document.getElementById('ps').innerHTML = num[0];
}