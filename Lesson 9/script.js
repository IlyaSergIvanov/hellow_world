//задача 1

function colorChange(id) {
    document.getElementById(id).style.background === "red" ?  
    document.getElementById(id).style.background = "green":  
    document.getElementById(id).style.background = "red";
       }
//Задача 2

i=0;
function ckickCount(id){
	var el = document.getElementById(id);
	i++;
	return el.innerText = i;	
    }
//Задача 3

document.onkeydown = function redKeys(e) {
	var cod = document.getElementsByClassName("keyC");
	var keys = document.getElementsByClassName("butt");
	var keycode = e.keyCode;
	for (var i = 0; i < cod.length; i++) {
    	if(cod[i].innerText == keycode) {
    		keys[i].style.background="red";
    	}
    }
}
document.onkeyup = function whiteKeys() {
	var keys = document.getElementsByClassName("butt");
	for (var i = 0; i < keys.length; i++) {
    		keys[i].style.background="white";
    	}
}