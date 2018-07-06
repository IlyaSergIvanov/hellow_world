function getFreeLand(arr1, arr2) {
	var width = Math.sqrt((arr1[0]*100) / arr1[1].charAt(0));
	var length = Math.sqrt((arr1[0]*100) /arr1[1].charAt(2));
	let remainder = ((arr1[0]*100) % (arr2[0] * arr2[1]));
	let quon = Math.floor((arr1[0]*100) / (arr2[0] * arr2[1]));
	
	if (arr1[0] === 0) {
    	err = new Error('Не задана площадь участка');
    throw err;
  	}

  	if (arr2[0] === 0 || arr2[1] === 0) {
    	err = new Error('Не задана площадь грядки');
    throw err;
  	}

  	if ((arr1[0]*100) < (arr2[0] * arr2[1])) {
    	err = new Error('Размер грядки больше размера участка');
    throw err;
  	}
  	console.log('Количество грядок = ' + quon);
  	console.log('Незанятое место = ' + remainder);
  	return remainder;

}
//getFreeLand([100, '1:1'],[15, 25]);
//getFreeLand([0, '1:1'],[15, 25]);
//getFreeLand([100, '1:1'],[5, 0]);
getFreeLand([6, '3:2'],[40, 28]);