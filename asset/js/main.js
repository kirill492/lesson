//alert("hello world");
var colorarray = ["#5A9C6E", "#A8BF5A", "#CCC", "#000", "#00FF00"];
var i = 0;
//function changecolor() {
//	document.body.style.background = colorarray[i];
//	i++;
//	console.log(colorarray[i]);
//
//	if (i > colorarray.length - 1) {
//		i = 0;
//	}
//}
function selectcolor() {
	let color = document.getElementById("color").value;
	console.log(color);
	document.body.style.background = color
}