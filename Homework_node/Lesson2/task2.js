
function* password_generator(len){
   var ints =[0,1,2,3,4,5,6,7,8,9]; 
   var letter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
   'o','p','q','r','s','t','u','v','w','x','y','z'];
   var bigLetter = ['A','B','C','D','E','F','G','H','I','G','K','L','M','N',
   'O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   while (true){
    var out="";
    for(var i=0;i<len;i++){
        var ch=Math.ceil(Math.random()*3);
        if(ch<=1){
           var ch2=Math.ceil(Math.random(1,ints.length)*8);
           out+=ints[ch2];
        }else if (ch<=2){
           var ch2=Math.ceil(Math.random(1,letter.length)*8);
           out+=letter[ch2];   
        }else {
           var ch2=Math.ceil(Math.random(1,bigLetter.length)*8);
           out+=bigLetter[ch2];   
        }
    }
    yield out;
}
};


var g = password_generator(16);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


