let ham = document.querySelector(".ri-menu-3-fill");
let menu=document.getElementsByClassName("menu")[0];

ham.addEventListener("click", () => {
   console.log("hello");
   menu.style.display = "block";
});

menu.addEventListener("click",()=>{
    window.location.href = "index.html";
})

let t=gsap.timeline()
let box=document.querySelector(".box")
t.from(".nav,a",{
    y:"-100%",
    opacity:0,
    stagger:0.3,
    // delay:0
    // duration:2
})
t.from("h1",{
    x:"-100%",
    opacity:0,
    stagger:0.3
})
t.from("p",{
    y:"-100%",
    opacity:0,
    stagger:0.3
})
t.from(".box,button",{
    scale:2,
    opacity:0,
    stagger:0.3
})

