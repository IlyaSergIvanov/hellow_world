
function get_quadrant_number(x,y){
		if (x>0 && y>0){
		console.log("Первая четверть");
	}else if (x<0 && y>0){
		console.log("Вторая четверть");
	}else if (x<0 && y<0){
		console.log("Третяя четверть");
	}else if (x>0 && y<0){
		console.log("Червертая четверть");
	}else {
		throw new Error();
	}

};
get_quadrant_number(-1,-1);