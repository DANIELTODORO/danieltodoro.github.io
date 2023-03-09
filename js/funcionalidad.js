
/*Scroll to top*/
let btnToTop=document.getElementById("btnToTop");
window.onscroll=function(){visibilidadBtnToTopFunc()};

btnToTop.addEventListener("click",function(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
});


function visibilidadBtnToTopFunc(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btnToTop.style.display="block";
        setTimeout(function(){
            btnToTop.style.display="none";
        }, 2100);
    } else {
        btnToTop.style.display="none";
    }
}
