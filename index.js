var randomnumber1=(Math.floor((Math.random())*6))+1;
var randomnumber2=(Math.floor((Math.random())*6))+1;
var img1=document.querySelector('.img1');
var img2=document.querySelector('.img2');
img1.setAttribute("src","images/dice"+randomnumber1+".png");
img2.setAttribute("src","images/dice"+randomnumber2+".png");

if(randomnumber1===randomnumber2)
{
  document.querySelector('h1').innerHTML="DRAW!";
}

else if(randomnumber1>randomnumber2)
{
  document.querySelector('h1').innerHTML="🚩Player1 Wins!"
}

else
{
  document.querySelector('h1').innerHTML="Player2 Wins!🚩"
}
