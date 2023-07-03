
function media() {
    let q = matchMedia("(max-width:550px)");
    if (q.matches) {
        document.querySelector("nav").style.flexDirection = "column";
    } else {
        document.querySelector("nav").style.flexDirection = "row";
    }
}
onload=media;
onresize=media;



function media() {
    let q = matchMedia("(max-width:550px)");
    if (q.matches) {
        document.querySelector("container first second").style.flexDirection = "column";
    } else {
        document.querySelector("container first second").style.flexDirection = "row";
    }
}
onload=media;
onresize=media;

 


function MoreLess() {
    var invisibleText = document.getElementById('invisible-text');
    var btnText= document.getElementById('btn')
    if (dots.style.display!="none") {
        dots.style.display="none"
        invisibleText.style.display="inline";
        btnText.innerHTML="Read Less";
    } else {
        dots.style.display="inline"
        invisibleText.style.display="none";
        btnText.innerHTML="Read More";
    }
}
