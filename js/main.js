const header = document.querySelector("#header");
const gnbLi = document.querySelectorAll("#gnb .gnbList > li");
const util = document.querySelectorAll("#gnb .utilMenu ul > li");
const side = document.querySelector("#sideBar");
const gnb = document.querySelector("#header #gnb");
const resizeBtn = document.querySelector("#header .resizeBtn");

for(let i=0;i<7;i++){
    let gnbItem = gnbLi.item(i);
    gnbItem.addEventListener("mouseenter",function(){
        header.classList.add("open");
    });
    gnbItem.addEventListener("mouseleave",function(){
        header.classList.remove("open");
    })
};


resizeBtn.addEventListener("click",function(){
    resizeBtn.classList.toggle("on");
    gnb.classList.toggle("on");
    side.classList.toggle("hidden");
    return false;
});


// #header 
const mask = document.querySelector("#section01 .mask");
const slideWrap = document.querySelector("#section01 .slideWrap");
const pagination = document.querySelector("#section01 .pagination");
const bullets = document.querySelectorAll(".pagination li");
const next = document.querySelector("#section01 .btnNext");
const prev = document.querySelector("#section01 .btnPrev");
let index = 0;

slideWrap.addEventListener('transitionend', function() {  
    if (index === 1) {
      slideWrap.prepend(slideWrap.lastElementChild);
    } else {
      slideWrap.appendChild(slideWrap.firstElementChild);
    }
    
    slideWrap.style.transition = 'none';
    slideWrap.style.transform = 'translate(0)';
    setTimeout(() => {
      slideWrap.style.transition = 'all 0.5s';
    })
}, false);

setInterval(() => {
    slideWrap.addEventListener('transitionend', function() {  
        slideWrap.style.transition = 'none';
        slideWrap.style.transform = 'translate(0)';
        setTimeout(() => {
          slideWrap.style.transition = 'all 0.5s';
        })
      }, false);
    slideWrap.style.transform = 'translate(-100%)';
}, 4000);

// #section01  


 window.addEventListener("scroll",function(){
    let st = window.pageYOffset;
    // console.log(st)
    if(st >= 50){
        document.querySelector("#header").style.position = "fixed";
    }
    if(st >= 600){
        side.classList.add("fix");
    } else {
        side.classList.remove("fix");
    }    
});

// #sideBar




