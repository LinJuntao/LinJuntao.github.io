var nav_div = document.querySelector(".nav_div");
var nav_list = document.querySelector(".nva_list");
var nav_a1 = document.querySelector("#a1");
var nav_a2 = document.querySelector("#a2");
var nav_a3 = document.querySelector("#a3");
var nav_a4 = document.querySelector("#a4");
var html_h = document.body.offsetHeight;
var a= (html_h/5 - 100)/4;

var index = 0;
nav_div.style.height ="100px";
nav_a1.style.height = html_h/5+a+"px";
nav_a2.style.height = html_h/5+a+"px";
nav_a3.style.height = html_h/5+a+"px";
nav_a4.style.height =  html_h/5+a+"px";
nav_div.addEventListener("click", function() {
	if (index == 0) {
		nav_div.style.background = "url(img/aovet-icon-off.png) #455871 no-repeat 50% 50%";
		nav_list.style.display = "block";
		index = 1;
	} else {
		nav_div.style.background = "url(img/aovet-icon.png) #455871 no-repeat 50% 50%";
		nav_list.style.display = "none";
		index = 0;
	}
});
nav_div.onmouseenter = function(){
	nav_div.style.backgroundColor = "#455871";
}
nav_div.onmouseout = function(){
	nav_div.style.backgroundColor = "#455885";
}
//nav_a1.onmouseenter = function(){
//	nav_a1.style.backgroundColor = "coral";
//}
//nav_a1.onmouseout = function(){
//	nav_a1.style.backgroundColor = "#455871";
//}
//nav_a2.onmouseenter = function(){
//	nav_a2.style.backgroundColor = "coral";
//}
//nav_a2.onmouseout = function(){
//	nav_a2.style.backgroundColor = "#455871";
//}
//nav_a3.onmouseenter = function(){
//	nav_a3.style.backgroundColor = "coral";
//}
//nav_a3.onmouseout = function(){
//	nav_a3.style.backgroundColor = "#455871";
//}
//nav_a4.onmouseenter = function(){
//	nav_a4.style.backgroundColor = "coral";
//}
//nav_a4.onmouseout = function(){
//	nav_a4.style.backgroundColor = "#455871";
//}