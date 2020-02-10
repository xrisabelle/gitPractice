
function zoom(imgs) {
var large=document.getElementById("img_display");
large.src = imgs.src;

var description=document.getElementById("description");
description.innerHTML=imgs.alt;

}

function imageSize(ImgObj, maxWidth, maxHeight){
  var image = new Image();

  image.src = ImgObj.src;
  var tempWidth;
  var tempHeight;
  
  if(image.width > 0 && image.height > 0){
  
      if (image.width/image.height >= maxWidth/maxHeight) {
          if (image.width > maxWidth) {
              tempWidth = maxWidth;
          
              tempHeight = (image.height * maxWidth) / image.width;
          } else {
         
              tempWidth = image.width;
              tempHeight = image.height;
          }
      } 
      else {
          if (image.height > maxHeight) {  
              tempHeight = maxHeight;
             
              tempWidth = (image.width * maxHeight) / image.height;      
          } else {
        
              tempWidth = image.width;
              tempHeight = image.height;
          }
      }
     
      ImgObj.height = tempHeight;
      ImgObj.width = tempWidth;
  
  }
}

window.onload = function() {
  
  var arrayImg=['picture/Angel.jpg',
              'picture/Self-portrait.jpg',
            'picture/Sistine_Madonna.jpg',
          'picture/Woman_with_a_Veil.jpg'];
  var arrayDes=['Angle',
              'Self portrait',
              'Sistine Madonna',
            'Woman with a Veil'];
  var i=0;
  var currentImg=document.getElementById("img_display");
  var currentDes=document.getElementById("description");


  function display() {
  currentImg.src = arrayImg[i];
 
  currentDes.innerHTML = arrayDes[i];
  }
  display();

  function next()
  {
    i++;
    if(i > arrayImg.length - 1) 
    {
      i = 0;
    }
  display();
  };
  function prev()
  {
    i--;
    if(i < 0) 
    {
      i = arrayImg.length - 1;
    }
  display();
}

  document.onkeydown = function(event)
  {
    var e = event;
    if(e && e.keyCode == 37) 
    { 
      prev();
    }
    if(e && e.keyCode == 39) 
    { 
      next();
    }
  }
}