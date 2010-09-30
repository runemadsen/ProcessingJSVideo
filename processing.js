void setup() 
{
	size(848, 480);
	smooth();
	fill(255, 0, 0);
	noStroke();
  pauseVideo();	
}

void draw() 
{	
  if(videoIsReady()){
    targetTime = map(mouseX, 0, screen.width, 0, $("#videotag")[0].duration);
    goToTime(targetTime);
  }

}
