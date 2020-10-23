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
const next = document.querySelector("#section01 .slideNext");
const prev = document.querySelector("#section01 .slidePrev");
let index;

next.addEventListener("click",function(){
    index= -1;
    mask.style.justifyContent = "flex-start";
    slideWrap.style.transform = "translate(-33.33%)";
});

prev.addEventListener("click",function(){
    if(index === -1){
        slideWrap.appendChild(slideWrap.firstElementChild);
    }
    index= 1;
    mask.style.justifyContent = "flex-end";
    slideWrap.style.transform = "translate(33.33%)";
});

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

// 슬라이드 (오픈소스)

setInterval(() => {
    slideWrap.style.transform = 'translate(-33.33%)';
}, 4000);

// 자동 

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




