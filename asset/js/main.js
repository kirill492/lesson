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
	// console.log(color);
	document.body.style.background = color

	// document.getElementById("result").innerHTML = color
}
let open_elements = document.getElementsByClassName('open');
let numbers = document.getElementsByClassName('knobka');
for (var i = 0; i < open_elements.length; i++) {
	open_elements[i].addEventListener('click', open);
}
for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', addnumber);
}
console.log(open_elements);
console.log(numbers);

function open() {
let o = this.value;
console.log(o)
add(o);
if (o == '=') {
	// calc();
}
}
function addnumber() {
	let n = this.value;
	add(n);
}
function add(v) {
let input = document.getElementById('enter');
let output = input.value;
input.value = output + v;
}

function raznost() {

}
function umnog() {

}
function del() {

}