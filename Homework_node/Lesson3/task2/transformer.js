module.exports = {
	camel_to_snake : function (str){
		var res = str.split('');

		for (i=0;i<res.length;i++){
			if (res[0] === res[0].toUpperCase()){
			res[0] = res[0].toLowerCase();
		}else  if (res[i] === res[i].toUpperCase()){
			res[i] = "_" + res[i].toLowerCase();
		}}
		result = res.join('');
		return result;
	},

	snake_to_camel : function (str){
		var res = str.split('');

		for (i=0;i<res.length;i++){
			if (res[0] === res[0].toLowerCase()){
			res[0] = res[0].toUpperCase();
		}else  if (res[i] === "_"){
			res[i] = res[i+1].toUpperCase();
			res.splice(i+1,1);
		}}
		result = res.join('');
		return result;
	}
}
/*var string = 'getUserId';
console.log(camel_to_snake(string));
var snake = 'set_repository';
console.log(snakeToCamel(snake));*/