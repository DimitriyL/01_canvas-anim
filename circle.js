var canvas = document.getElementById("slate");
var stopButt = document.getElementById("stop");
var clearButt = document.getElementById("clear");
var ctx = canvas.getContext('2d');
ctx.fillStyle = "pink";
var rad = 40;
var grow = true;

var requestID;

//var animate = function(e){

  //  window.cancelAnimationFrame(requestID);
    
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
//}

var onOff = function(e){
    window.cancelAnimationFrame(requestID);
}

stopButt.addEventListener("click", onOff);

window.requestAnimationFrame(circleDraw);

