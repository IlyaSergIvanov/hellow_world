/*function func() {//пример 1
		 	return [1, 2]
		};*/
function func(){//пример 2
	return ['Python', 'is', 'programming language']
}

function return_object(func, ...sign) {
	return function() {
		let array = func.apply(this);
		let arg = sign;
		let obj = {}
		if (Array.isArray(array) === true){
			for(var i = 0; i < arg.length; i++) {
			obj[arg[i]] = array[i];
		}}else {
			alert ('Функция вощвращает не массив');
		}
		return obj;
	}
}
/*let result = return_object(func, 'one', 'two');//пример 1
let r = result();
console.log(r.one); 
console.log(r.two); */

let result  = return_object (func, 'a', 'b', 'c');//пример 2
let r = result();
console.log(r.c);		