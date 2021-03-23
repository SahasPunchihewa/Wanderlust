window.onscroll=function(){myFunction()};

var header=document.getElementById("header");
var title=document.getElementById("nav-title");
var anchor=document.getElementById("nav-anc");
var headicon=document.getElementById("h-icon");
var sticky=header.offsetTop;
function myFunction()
{
    if(window.pageYOffset>sticky)
    {
        header.classList.add("sticky");
        title.classList.add("st-title");
        anchor.classList.add("st-anc");
        headicon.src="img/logo2.png";
    }
    else
    {
        header.classList.remove("sticky");
        title.classList.remove("st-title");
        anchor.classList.remove("st-anc");
        headicon.src="img/logo.png";
    }
}