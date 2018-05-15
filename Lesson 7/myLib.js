var myLib = function(){
	var myObj = {};
	
	myObj.searchMin = function(array){
	var min = array[0];
   		for (i = 1; i < array.length; ++i){
	    if (array[i] < min)
	    min = array[i];
	  }
	  return min;
	}
	myObj.searchMax = function(array){
	var max = array[0];
   		for (i = 1; i < array.length; ++i){
	    if (array[i] > max)
	    max = array[i];
	  }
	  return max;
	}
	myObj.numSumm = function(str){
	var arr=str.split('');
	var sum= 0;
		for(var i = 0; i <arr.length; i++){
		sum += +arr[i];
	   }
	   return sum;
	}
	myObj.cloneArr = function(array){
	var arrC = [];
		for (i = 0; i < array.length; ++i){
			arrC.push(array[i]);
	   }
	   return arrC;
	}
	  
	
	return myObj;
}();
