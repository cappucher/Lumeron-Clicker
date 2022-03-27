var clickPerClick = 1;
var clicks = 0;
var BuyClicks = 5;
var click_value = 1;
var click_second = 0;
var myVar;
var CPS = 50;
var ClicksPerClick = 500;
var rebirth_value = 10000;
var rebirths = 0;
var clickmultiplier = 1;

document.getElementById("clicks").innerHTML = localStorage.getItem("clicks");
clicks = Number(localStorage.getItem("clicks"));

function saveing()
{
  localStorage.setItem("clicks", Number(clicks));
  localStorage.setItem("BuyClicks", Number(BuyClicks));
  localStorage.setItem("clickPerClick", Number(clickPerClick));
  localStorage.setItem("click_second", Number(click_second));
  localStorage.setItem("click_value", Number(click_value));
  localStorage.setItem("CPS", Number(CPS));
  localStorage.setItem("ClicksPerClick", Number(ClicksPerClick));
  localStorage.setItem("rebirth_value", Number(rebirth_value));
  localStorage.setItem("rebirths", Number(rebirths));
  localStorage.setItem("clickmultiplier", Number(clickmultiplier));
}
function onClick()
{
  clicks += (click_value * clickmultiplier);
  document.getElementById("clicks").innerHTML = Math.round(clicks);
}

function buy()
{
  if (clicks >= Math.round(BuyClicks))
  {
    clicks -= BuyClicks;
    BuyClicks *= 1.25;
    document.getElementById("BuyClicks").innerHTML = Math.round(BuyClicks);
    document.getElementById("clicks").innerHTML = Math.round(clicks);
    click_value += clickPerClick;
    document.getElementById("AmtOfClicks").innerHTML = click_value * clickmultiplier;
  }
}
function buy2()
{
  if (clicks >= Math.round(CPS))
  {
    clicks -= CPS;
    CPS *= 1.25;
    document.getElementById("CPS").innerHTML = Math.round(CPS);
    document.getElementById("clicks").innerHTML = Math.round(clicks);
    click_second += clickmultiplier;
    document.getElementById("AmtOfCPS").innerHTML = click_second;
  }
}
function buy3()
{
  if (clicks >= Math.round(ClicksPerClick))
  {
    clicks -= ClicksPerClick;
    ClicksPerClick *= 1.25;
    document.getElementById("ClicksPerClick").innerHTML = Math.round(ClicksPerClick);
    document.getElementById("clicks").innerHTML = Math.round(clicks);
    clickPerClick += 1;
    document.getElementById("ImproveTheClicks").innerHTML = clickPerClick;
  }
}
function second()
{
  clicks += click_second;
  document.getElementById("clicks").innerHTML = Math.round(clicks);
  
}

myVar = setInterval(second, 1000);

function rebirthCOOL()
{
  if (clicks >= rebirth_value) 
  {
    clicks = 0;
    click_value = 1;
    click_second = 0;
    clickPerClick = 1;
    rebirth_value *= 3.5;
    clickmultiplier *= 2;
    rebirths += 1;
    BuyClicks = 5;
    CPS = 50;
    ClicksPerClick = 500;
    document.getElementById("rebirth").innerHTML = Math.round(rebirth_value);
    document.getElementById("BuyClicks").innerHTML = Math.round(BuyClicks);
    document.getElementById("CPS").innerHTML = Math.round(CPS);
    document.getElementById("ClicksPerClick").innerHTML = Math.round(ClicksPerClick);
    document.getElementById("clicks").innerHTML = 0;
    document.getElementById("AmtOfClicks").innerHTML = Math.round(click_value) * clickmultiplier;
    document.getElementById("AmtOfCPS").innerHTML = Math.round(click_second) * clickmultiplier;
    document.getElementById("ImproveTheClicks").innerHTML = Math.round(clickPerClick);
    document.getElementById("rebirths").innerHTML = rebirths;
   }
     
  }
