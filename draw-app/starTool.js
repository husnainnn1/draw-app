function starTool() {
// assigns a name to the tool
    this.name = "startool";
// assigns a icon to the tool
    this.icon = "assets/star.jpg";
// sets number of stars for each mouse press
    this.stars = 3;
// sets spread of spray from the mouse pointer
    this.spread = 20;
// set scale
    this.scale = [0.1,0.3];
 // draw stars
    this.draw = function(){
//if mouse is pressed then displays stars on the display window 
        if(mouseIsPressed){
            for(var i = 0; i < this.stars; i++){
// assigns the star locatiomn of the x and y values 
                let starX = random(mouseX - this.spread, mouseX + this.spread);
                let starY = random(mouseY - this.spread, mouseY + this.spread);
// sets star scale
                let scale = random(this.scale[0], this.scale[1]);
// draw a star
                beginShape();
                vertex(starX, starY);
                vertex(starX + 10*scale, starY - 20*scale);
                vertex(starX + 20*scale, starY);
                vertex(starX + 40*scale, starY + 5*scale);
                vertex(starX + 25*scale, starY + 17*scale);
                vertex(starX + 30*scale, starY + 40*scale);
                vertex(starX + 10*scale, starY + 25*scale);
                vertex(starX - 10*scale, starY + 40*scale);
                vertex(starX - 5*scale, starY + 17*scale);
                vertex(starX - 20*scale, starY + 5*scale);
                vertex(starX, starY);
                endShape();
            }
        }
    };
}