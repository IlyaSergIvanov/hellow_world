//задача 1
	function getCurrTime(){
		setTimeout(delEl,996);
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds(); 
		var dd = ":";
		var parent =  document.getElementById("placeholder");
		var hrs =getElement (hrs,hours);
		var dot =getElement (dot,dd);
		var min =getElement (min,minutes);
		var dot =getElement (dot,dd);
	    var sec =getElement (sec,seconds);
	    function delEl(){
			var element = document.getElementById("placeholder");
			while (element.firstChild) {
  				element.removeChild(element.firstChild);
			}
			return;
			}
	  	function getElement (hms,x){
			var hms = document.createElement("div");
			hms.setAttribute("id", "time-container");	
			parent.appendChild(hms);
			hms.innerText = x;
			hms.style.color = randColor();
			hms.style.width ='50px';
	    	hms.style.margin ='2px';
	    	hms.style.float = 'left';
	    	hms.style.padding = '30px';
	    	function randColor() {
	    		var num1 = Math.floor(Math.random()*255) + 1;
	    		var num2 = Math.floor(Math.random()*255) + 1;
	    		var num3 = Math.floor(Math.random()*255) + 1;
	    		var str = ("rgb"+"("+num1+","+num2+","+num3+","+1+")");
	    		return str;
	    	}
	    	return hms;
		}
		

		return;	
	}

// Задача 2
var product1 = {
	prname: 'Объектив Canon EF 135mm f/2L USM',
	prsize: 'размеры (DхL): 82.5x112 мм',
	foto: '1.png',
	getPrInfo: function(idEl){
		var el = document.getElementById(idEl);
		var divName = document.createElement('div');
		divName.textContent = this.prname;
		var divLastName = document.createElement('div');
		divLastName.textContent = this.prsize;
		var img = document.createElement('img');
		img.setAttribute('src', this.foto);
		el.append(img);
		el.append(divName);
		el.append(divLastName);
		img.style.width = '400px';
		img.style.border = 'solid';
	}	
}
var product2 = {
	prname: 'Объектив Sony 18-105mm f/4 G OSS PZ E (SELP18105G)',
	prsize: 'размеры (DхL): 78x110 мм',
	foto: '2.png',
	getPrInfo: function(idEl){
		var el = document.getElementById(idEl);
		var divName = document.createElement('div');
		divName.textContent = this.prname;
		var divLastName = document.createElement('div');
		divLastName.textContent = this.prsize;
		var img = document.createElement('img');
		img.setAttribute('src', this.foto);
		el.append(img);
		el.append(divName);
		el.append(divLastName);
		img.style.width = '400px';
		img.style.border = 'solid';
	}	
}
//Задача 3
function trafficLight (){
	function yellowLight (){
		var col = document.getElementById("yellow");
		col.style.background = "yellow";
		return;
	}
	function greenLight (){
		var col = document.getElementById("green");
		col.style.background = "green";
		return;
	}
	function redLight (){
		var col = document.getElementById("red");
		col.style.background = "red";
		return;
	}	
	function blackLight (){
		var col1 = document.getElementById("yellow");
		col1.style.background = "black";
		var col2 = document.getElementById("green");
		col2.style.background = "black"
		var col3 = document.getElementById("red");
		col3.style.background = "black";
		return;
	}
	
	function cycle(){
		setTimeout(greenLight);
		setTimeout(blackLight,2000);
		setTimeout(yellowLight,2001);
		setTimeout(blackLight,4000);
		setTimeout(redLight,4001);
		setTimeout(blackLight,6000);
		setTimeout(yellowLight,6001);
		setTimeout(blackLight,8000);
		setTimeout(greenLight,8001);
		return
		}
			
	for (i=0;i<10;i++){
	x = 8002*i;
	setTimeout(cycle,x);
	};
	return;
}
