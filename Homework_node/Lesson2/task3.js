var fs = require('fs');

fs.readFile("data.txt", (err, data) => {
  if(err) throw err;
	var rdata = data.toString();
	var arrdata = rdata.split(' ');
	var arrmod = [];
	for (i=0;i<arrdata.length;i++){
		if (arrdata[i]%2===0){
			arrmod.push(arrdata[i]); 
		}
	}
	var resmod = arrmod.join(' ');
	fs.writeFile("out-1.txt", resmod, (err) => {
  		if (err) throw err;
  	});
  	var arreq = [];
  	for (i=0;i<arrdata.length;i++){
		var c = arrdata[i]**3; 
			arreq.push(c); 
		};
	var resarreq = arreq.join(' ');	
	fs.writeFile("out-2.txt", resarreq, (err) => {
  		if (err) throw err;
  	});	

});

	