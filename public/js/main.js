window.addEventListener("scroll", function(){
    let nav = this.document.querySelector("nav");
    nav.classList.toggle("bg-slate-700", window.scrollY > 0);
})


