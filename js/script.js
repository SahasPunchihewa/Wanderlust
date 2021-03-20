window.onscroll=function(){myFunction()};

var header=document.getElementById("header");
var title=document.getElementById("nav-title");
var anchor=document.getElementById("nav-anc");
var mainTitle=document.getElementById("main-title");
var headicon=document.getElementById("h-icon");

var uName=document.qform.uname.value;
var eMail=document.qform.email.value;
var Subject=document.qform.subject.value;
var Detail=document.qform.query.value;

var sticky=header.offsetTop;

function myFunction()
{
    if(window.pageYOffset>sticky)
    {
        header.classList.add("sticky");
        title.classList.add("st-title");
        anchor.classList.add("st-anc");
        mainTitle.classList.add("main-sticky");
        headicon.src="img/logo2.png";
    }
    else
    {
        header.classList.remove("sticky");
        title.classList.remove("st-title");
        anchor.classList.remove("st-anc");
        mainTitle.classList.remove("main-sticky");
        headicon.src="img/logo.png";
    }
}