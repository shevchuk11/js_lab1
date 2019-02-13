var second = 234245645335 ;
var hour = second / 3600;
console.log("Hours "+hour);
var ost = second % 3600 ;
console.log("seconds "+ost);



var str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.";

var h = [];

for (i=0; i<str.length; i++){
	if (str.charAt(i) == "a"){
		h.push(i);
	}
}

console.log(h);