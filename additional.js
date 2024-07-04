let pointer = document.getElementById("pointer");
let outer = document.getElementById("outer")

window.addEventListener("mousemove" , (e)=>{
    pointer.style.left = `${e.clientX}px`
    pointer.style.top = `${e.clientY}px`


outer.animate({
    left : `${e.clientX}px`,
    top : `${e.clientY}px`
},{duration:500, fill:"forwards"})

})