var canvas = document.getElementById("slate");
var stopButt = document.getElementById("stop");
var clearButt = document.getElementById("clear");
var growButt = document.getElementById("grow");
var dvdButt = document.getElementById("dvd");
var ctx = canvas.getContext('2d');

var rad = 0;
var grow = true;

image = document.getElementById("dvdimg");

var xVel = Math.floor(Math.random() * 5 + 1);
var yVel = Math.floor(Math.random() * 5 + 1);
var posX = Math.floor(Math.random() * 300 + 100);
var posY = Math.floor(Math.random() * 300 + 100);

var requestID;

var animate = function(e){
    
    ctx.fillStyle = "pink";
    xVel = Math.floor(Math.random() * 5 + 1);
    yVel = Math.floor(Math.random() * 5 + 1);
    posX = Math.floor(Math.random() * 300 + 100);
    posY = Math.floor(Math.random() * 300 + 100);

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
    xVel = Math.floor(Math.random() * 5 + 1);
    yVel = Math.floor(Math.random() * 5 + 1);
    posX = Math.floor(Math.random() * 300 + 100);
    posY = Math.floor(Math.random() * 300 + 100);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var dvd = function(e){

    ctx.fillStyle = "orange";
    rad = 0;

    onOff();

    var bounce = function(e){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.beginPath();
	ctx.drawImage(image, posX, posY, 150, 120);
	//ctx.stroke();
	ctx.fill();
	
	if(xVel > 0){
	    if(posX < 360){
		posX += xVel;
	    }
	    else{
		xVel *= -1;
	    }
	}
	else if(xVel < 0){
	    if(posX > -5){
		posX += xVel;
	    }
	    else{
		xVel *= -1;
	    }
	}
	if(yVel > 0){
	    if(posY < 410){
		posY += yVel;
	    }
	    else{
		yVel *= -1;
	    }
	}
	else if(yVel < 0){
	    if(posY > -30){
		posY += yVel;
	    }
	    else{
		yVel *= -1;
	    }
	}
	
	requestID = window.requestAnimationFrame(bounce);
	console.log(requestID);
    }

    bounce();

}
stopButt.addEventListener("click", onOff);

clearButt.addEventListener("click", clear);

growButt.addEventListener("click", animate);

dvdButt.addEventListener("click", dvd);

window.requestAnimationFrame(circleDraw);


