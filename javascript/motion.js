var val=0;
var x=0;
var y=0;
var road;
var city;
function rott()
{
val=val+1;
document.getElementById('bkwheel').style.transform="rotate("+val+"deg)";
document.getElementById('frwheel').style.transform="rotate("+val+"deg)";
if(val>359){ //when value goes 360 again start from 1
	val=1;
}
road=document.querySelector(".road");//selection of class road
road.style.backgroundPosition=x+'px';
x=x-1;
city=document.querySelector(".city");
city.style.backgroundPosition=y+'px';
y=y-1;
if(x<-10000||y<-10000){//value going high adds break in animation
	x=1;
	y=1;
}
}