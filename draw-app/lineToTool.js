function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";
// intialise and creates a variable called "startMouseX" and gives it a value of -1
	var startMouseX = -1;
// intialise and creates a variable called "startMouseY" and gives it a value of -1
	var startMouseY = -1;
// creates variable "drawing" and gives it a boolean value of false
	var drawing = false;

	this.draw = function(){
// if the mouse is pressed and "startMouseX' is also -1 then the value of "startMouseX" is changed to the current value of mouseX and the value of startMouseY" is changed to the current value of mouseY
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
//"drawing is set to true and the loadpixel command is loaded where the pixel data is loaded for the display window into a pixel[] array
				drawing = true;
				loadPixels();
			}
// if "startMouseX" is not equal to -1 then updatepixel() is used to update the display window with the data in the pixels[] array.
// then a line is created with x values of "startMouseX" and "mouseX" and y values of "startMouseY" and "mouseY"
			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
// if the first two conditions are not met then this is used where drawing is set to false and the "startMouseX" and "startMouseY" are set to -1 if they were previosuly changed 
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
