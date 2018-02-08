var canvas = document.getElementById("slate");
var stopButt = document.getElementById("stop");
var clearButt = document.getElementById("clear");
var growButt = document.getElementById("grow");
var dvdButt = document.getElementById("dvd");
var ctx = canvas.getContext('2d');
ctx.fillStyle = "pink";
var rad = 0;
var grow = true;

var xVel = 1;
var yVel = 1;
var posX = canvas.width/2;
var posY = canvas.height/2;

var requestID;

var animate = function(e){

    onOff();
    
    var circleDraw = function(e){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.beginPath();
	ctx.arc(canvas.width/2, canvas.height/2, rad, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	
	if(grow == true){
	    if(rad < 250){
		rad++;
	    }
	    else if(rad >= 250){
		grow = false;
	    }
	}
	else{
	    if(rad > 0){
		rad--;
	    }
	    if(rad <= 0){
		grow = true;
	    }
	}
	
	requestID = window.requestAnimationFrame(circleDraw);
	console.log(requestID);
	
	
    }

    circleDraw();
}

var onOff = function(e){
    window.cancelAnimationFrame(requestID);
}

var clear = function(e){
    onOff();
    rad = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var bounce = function(e){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(posX, posY, 25, 0, 2 * Math.PI);
    //ctx.stroke();
    ctx.fill();

    if(xVel > 0){
	if(posX < canvas.width){
	    posX += xVel;
	}
	else{
	    xVel *= -1;
	}
    }
    else if(xVel < 0){
	if(posX > 0){
	    posX += xVel;
	}
	else{
	    xVel *= -1;
	}
    }

    requestID = window.requestAnimationFrame(bounce);
    console.log(requestID);
}

stopButt.addEventListener("click", onOff);

clearButt.addEventListener("click", clear);

growButt.addEventListener("click", animate);

dvdButt.addEventListener("click", bounce);

window.requestAnimationFrame(circleDraw);


