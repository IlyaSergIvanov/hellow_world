function pause(func, ms) {

  return function() {
    var savedThis = this;
    var savedArgs = arguments;
    setTimeout(function() {
      func.apply(savedThis, savedArgs);
    }, ms);
  };
}
function func(x) {
  console.log(x);
}
var res = pause(func, 2000);
res("Функция выполнится с задержкой в 2 секунды!"); 

							