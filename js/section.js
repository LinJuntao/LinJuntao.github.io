var html_w = document.body.clientWidth;
var html_h = document.body.clientHeight;
var section_first = document.querySelector("#first");
var section_second = document.querySelector("#second");
var section_third = document.querySelector("#third");
var section_four = document.querySelector("#four");
var section_bk = document.querySelectorAll("section .contain>li>div");

section_first.style.height = html_h + "px";
section_second.style.height = html_h + "px";
section_third.style.height = html_h + "px";
section_four.style.height = html_h + "px";

for (var i = 0; i < section_bk.length; i++) {
	section_bk[i].style.width = (html_w + 100) / 2 + "px";
	section_bk[i].style.height = html_h - 80 + "px";
}
var two = html_h;
var third = html_h*2;
var furo  = html_h*3;
//window.onscroll = function(){
//	var ontop = document.documentElement.scrollTop //|| document.body.scrollTop;
//	
//	if(ontop == two){
//		alert(ontop);
//	}
//	if(ontop == third){
//		alert(ontop);
//	}
//	if(ontop == furo ){
//		alert(ontop);
//	}
//}

 
