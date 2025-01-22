function circleTool(){
//assigns the name of this tool
	this.name = "circleDraw";
//assigns the icon for this tool
	this.icon = "assets/circle.jpg";
// intialise and creates a variable called "startMouseX" and gives it a value of -1
	var startMouseX = -1;
// intialise and creates a variable called "startMouseY" and gives it a value of -1
	var startMouseY = -1;
// creates variable "drawing" and gives it a boolean value of false
	var drawing = false;

	this.draw = function(){
//checks if the mouse is pressed
		if(mouseIsPressed){
//the startMouseX value is checked for value equality
			if(startMouseX == -1){
//if the above is true then start mouse x value becomes currrent mouse x value			
				startMouseX = mouseX;
//if the above is true then start mouse y value becomes currrent mouse y value	
				startMouseY = mouseY;
//drawing is set to true and activated
				drawing = true;
//load pixels for the display into the pixel array				
				loadPixels();
			}
// if startmouseX is not -1 then this run
			else{
//updates the pixels in the pixel array for the display window 
				updatePixels();
				ellipse(startMouseX, startMouseY, (mouseX - startMouseX)*2, (mouseY - startMouseY)*2);
			}

		}
// if the first two conditions are not met then this is used where drawing is set to false and the "startMouseX" and "startMouseY" are set to 10 if they were previosuly changed 
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


	
	
}