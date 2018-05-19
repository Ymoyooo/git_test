window.onload=function bb()
{
  var height=window.innerHeight;
  var currentHeight=document.documentElement.scrollTop;
  var video=document.getElementById("btn");
 //alert(height);
  if(currentHeight>(height/2))
  {
    video.style.display="none";
  }
  else
  {
    video.style.display="none";
  }
}