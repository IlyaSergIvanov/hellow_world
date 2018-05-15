
function getY(x){
        var y = 1/x + Math.sqrt(x);
        return y; 
    }
   
     


describe("task_01 getY positive", function(){
    var input_x= 5;
	var result = 2.43606797749979 ;
    var msg = "Получить значение y при х= " + input_x + " результат 2.43606797749979";
    it(msg, function(){
        var rez = getY(input_x);
        expect(rez).toBe(2.43606797749979);
    });
});

describe("task_02getY negativ", function(){
    var input_x= 0;
    var result = Infinity ;
    var msg = "Получить значение y при х= " + input_x + " результат Infinity";
    it(msg, function(){
        var rez = getY(input_x);
        expect(rez).toBe(Infinity);
    });
});

describe("task_03 getY negativ", function(){
    var input_x= -5;
    var result = Infinity ;
    var msg = "Получить значение y при х= " + input_x + " результат Infinity";
    it(msg, function(){
        var rez = getY(input_x);
        expect(rez).toBe(Infinity);
    });
});