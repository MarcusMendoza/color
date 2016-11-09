//Declare the Color Object with our new keyword below here.
const colorobjec()
  let rgb[r,g,b]

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[1] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
let redIntensity = redworks[0]/255;
redIntensity=redIntensity*100;
redIntensity = Math.Round(redIntensity)
};

//greenIntensity
Color.greenIntensity = function(rgb){
let greenIntensity = greenworks[1]/255;
greenIntensity=greenIntensity*100;
greenIntensity = Math.Round(greenIntensity)
};

//blueIntensity
Color.blueIntensity = function(rgb){
let blueIntensity = blueworks[2]/255;
blueIntensity=blueIntensity*100;
blueIntensity = Math.Round(blueIntensity)
};

//brightness
color.brightness= function()

//complement
