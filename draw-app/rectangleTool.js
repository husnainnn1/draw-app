function rectangleTool(){
// assigns the name of "rectangleDraw"
	this.name = "rectangleDraw";
// asigns the icon on the display window
	this.icon = "assets/rectangle.jpg";
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
//drawing is set to true
				drawing = true;
//load pixels for the display into the pixel array
				loadPixels();
			}

// if startmouseX is not -1 then this run
			else{
//updates the pixels in the pixel array for the display window 
				updatePixels();
//draws a rectangle from the start x and y location of the mouse to the current x and y location of the mouse
				rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
			}

		}
					
// if the mouse is not pressed, check if drawing state is set to active
		else if(drawing){
//drawing state is set to inactove
			drawing = false;
//this sets rectangle start point location to its initial value of -1
			startMouseX = -1;
			startMouseY = -1;
		}
	};


	
}