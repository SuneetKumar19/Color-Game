var numberofsquares=6;
var colors =  generaterandomcolors(numberofsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor = colors[Math.floor(Math.random() * colors.length)];
var colordisplay = document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var stripe2=document.querySelector("#stripe2");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var se=document.querySelector("#se");
var count=0;
var flag=0;
easybtn.addEventListener("click", function() 
{
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numberofsquares = 3;
	colors = generaterandomcolors(numberofsquares);
	pickedColor = pickColor();
	colordisplay.textContent = pickedcolor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i])
		 {
			squares[i].style.background = colors[i];
		} else 
		{
			squares[i].style.display ="none";
		}
	}
	reset();
});
hardbtn.addEventListener("click", function() {
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numberofsquares = 6;
	colors = generaterandomcolors(numberofsquares);
	pickedColor = pickColor();
	colordisplay.textContent = pickedcolor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
	reset();
});

stripe2.addEventListener("click",reset);
function reset() {
	flag=0;
colors=generaterandomcolors(numberofsquares);
pickedcolor = pickColor();
colordisplay.textContent = pickedcolor;
for(var i=0;i<squares.length ; i++)
	{
		squares[i].style.background=colors[i];
	}
	stripe2.textContent="refresh";
	h1.style.background="black";
	messagedisplay.textContent="     PLAY";
	stripe.style.background="rgba(255,255,255,0.51)";
	//easybtn.classList.remove("selected");
};
colordisplay.textContent = pickedcolor;
for(var i=0; i< squares.length; i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function()
	{
		var clickedcolor =  this.style.background;
		console.log(clickedcolor,pickedcolor);
		if(clickedcolor === pickedcolor&&flag===0)
		{
			flag=1;
			messagedisplay.textContent="CORRECT";
			changecolors(clickedcolor);
			h1.style.background=clickedcolor;
			stripe.style.background=clickedcolor;
			stripe2.textContent="PLAY AGAIN!!";
			count++;
			se.textContent="SCORE    "+count;
		}
		else
		{
			this.style.background="black"; 
			messagedisplay.textContent="TRY AGAIN";
		} 
	});
}   
function changecolors(color)
{
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.background=color;
	}
}
 function generaterandomcolors(num)
 {
 var arr=[];
for(var i=0;i<num;i++)
{
arr.push(randomcolor());
}
return arr;
 }
 function randomcolor()
 {
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
 }
 function pickColor() {
	var random = Math.floor(Math.random() * numberofsquares);
	return colors[random];
}
 
