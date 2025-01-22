//Allows user to draw free handedly with rainbow like stroke color
function RainbowPenTool(){
//Adding icon and name.
    this.icon = "assets/rainbowPen.jpg";
    this.name = "Rainbow Pen";

//To smoothly draw we'll draw a line from the previous mouse location
//to the current mouse location. The following values store
//the locations from the last frame. They are -1 to start with because

	var startMouseX = -1;
	var startMouseY = -1;

	this.draw = function(){
        colorMode(HSB);
//If the mouse is pressed.
		if(mouseIsPressed){
//Check if they previousX and Y are -1. set them to the current.
//mouse X and Y if they are.
			if (startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
			}
//If we already have values for previousX and Y we can draw a line from 
//there to the current mouse location.
			else{
				//change stroke color gradually based on framecount
                stroke((2 * frameCount) % 255,200,200);
				line(startMouseX, startMouseY, mouseX, mouseY);
				startMouseX = mouseX;
				startMouseY = mouseY;
			}
		}
//If the user has released the mouse we want to set the previousMouse values 
//back to -1.
		else{
			startMouseX = -1;
			startMouseY = -1;
		}
		colorMode(RGB);
	};

}