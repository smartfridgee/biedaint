var can = document.getElementById("canvas");
var ctx = can.getContext("2d");

var w = window.innerWidth;
var h = window.innerHeight;

function resizeWindow(){	
	if(w > 2000){
		can.width = 1800;
		can.height = 900;
	}
	else if(w < 2000){
		can.width = 1500;
		can.height = 850;
	}
}

resizeWindow();


function mouseIn(event) {
	var x = event.clientX;
	var y = event.clientY;
	let size = sizeChange();
	let eraser = setEraser();
	let color = colorChange();
	let shape = changeShape();

	if(eraser == false && shape == "circle"){
		var x = event.clientX;
		var y = event.clientY;
		
		ctx.beginPath();
		ctx.arc(x, y, size, 0, 2 * Math.PI);
		ctx.fillStyle = color;
		ctx.fill();
	}
	else if(eraser == true && shape == "circle"){
		var x = event.clientX;
		var y = event.clientY;
		
		ctx.beginPath();
		ctx.arc(x, y, size, 0, 2 * Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();
	}
	else if(eraser == false && shape == "square"){
		var x = event.clientX;
		var y = event.clientY;
		
		ctx.beginPath();
		ctx.fillRect(x-size/2, y-size/2, size, size);
		ctx.fillStyle = color;
		ctx.fill();
	}
	else if(eraser == true && shape == "square"){
		var x = event.clientX;
		var y = event.clientY;
		
		ctx.beginPath();
		ctx.fillRect(x-size/2, y-size/2, size, size);
		ctx.fillStyle = "white";
		ctx.fill();
	}
	
	document.getElementById("text").value = 1;
}

function mouseOut(event) {
	document.getElementById("text").value = 0;
}

function checkMouse(){
	var a = document.getElementById("text").value;
	return a;
}

function colorChange(){
	let x = document.getElementById("color").value;
	return x;
}	

function sizeChange(){
	let x = document.getElementById("size").value;
	document.getElementById("svalue").value = x;
	return x;
			
}

function setEraser(){
	let x = document.getElementById("eraser").checked;
	return x;
}

function changeShape(){
	let a = document.getElementById("shape").value;
	/*
	if(a == "circle"){
		a = 'ctx.arc(x, y, size, 0, 2 * Math.PI)';
	}
	else if(x == "square"){
		a = 'ctx.fillRect(x-size, y-size, x+size, y+size)';
	}*/
	return a;
}

function canvasRefresh(){
	ctx.fillStyle="white";
	ctx.fillRect(0, 0, 1800, 900);
}

function changeTheme(){
	var val = document.getElementById("theme").innerHTML;
	
	if(val == "Jasny motyw"){
		document.body.style.backgroundColor = "#E6E6E6";
		document.getElementById("theme").innerHTML = "Ciemny motyw";
		document.getElementById("title").style.color = "black";
		document.getElementById("title").style.textShadow = "0px 0px 5px white";
	}
	else{
		document.body.style.backgroundColor = "#424242";
		document.getElementById("theme").innerHTML = "Jasny motyw";
		document.getElementById("title").style.color = "white";
		document.getElementById("title").style.textShadow = "0px 0px 5px black";
	}
}

function mousePaint(event){
	let a = checkMouse();
	let eraser = setEraser();
	let color = colorChange();
	let size = sizeChange();
	let shape = changeShape();
	
	if(a == 1 && eraser == false && shape == "circle"){
		var x = event.clientX;
		var y = event.clientY;
		
		ctx.beginPath();
		ctx.arc(x, y, size, 0, 2 * Math.PI);
		ctx.fillStyle = color;
		ctx.fill();
	}
	else if(a == 1 && eraser == true && shape == "circle"){
		var x = event.clientX;
		var y = event.clientY;
		
		ctx.beginPath();
		ctx.arc(x, y, size, 0, 2 * Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();
	}
	else if(a == 1 && eraser == false && shape == "square"){
		var x = event.clientX;
		var y = event.clientY;
		ctx.beginPath();
		ctx.fillRect(x-size/2, y-size/2, size, size);
		ctx.fillStyle = color;
		ctx.fill();
	}
	else if(a == 1 && eraser == true && shape == "square"){
		var x = event.clientX;
		var y = event.clientY;
		
		ctx.beginPath();
		ctx.fillRect(x-size/2, y-size/2, size, size);
		ctx.fillStyle = "white";
		ctx.fill();
	}
	else{
		console.log("none");
	}
}
