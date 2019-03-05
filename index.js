var second = 234245645335 ;
var hour1 = Math.floor(second / 3600);
console.log(hour1);
var seconde =second % 3600;
console.log(seconde);
var minut = Math.floor(seconde / 60);
console.log(minut);
var hour = Math.floor(seconde % 60);
console.log(hour);



var str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.";

var m = [];

for (i=1; i<str.length; i++){
	if (str.charAt(i) == "a"){
		m.push(i);
	}
}
var x = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.";

while (x.indexOf("a", i ) != -1){ 
	console.log(x.indexOf("a",i)); 
	i++;
}

var d = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatibus magni natus ad quibusdam, obcaecati deserunt incidunt voluptatum odio sit ipsum explicabo, sequi dolorem aliquid veniam, error reprehenderit placeat odit perspiciatis non excepturi. Aut itaque ut quibusdam earum nulla cum perferendis mollitia magni sit asperiores nam quod soluta, odio, vel in, doloribus unde. Reprehenderit aliquam nam ipsam molestiae, vel nulla dolorem cupiditate dicta cum, ad temporibus enim. Eius voluptatibus, autem dolore debitis ipsam cumque aliquid porro maxime distinctio iste aperiam, vel minima facilis optio voluptates fugit modi quas pariatur? Illum cum fuga ut quasi accusamus perferendis earum repellat quas optio.";
 for (var i = 1; i<d.length; i++){
 	
 	console.log(x.charAt(i));
 }
 // for (var i of d){
 // 	console.log(i);
 // }

console.log(m);