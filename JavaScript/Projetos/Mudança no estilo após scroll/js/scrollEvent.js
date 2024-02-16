;(function(){
    window.addEventListener("scroll", () => {
        if(window.scrollY > 300){
            document.body.classList.add("fx")
        }else{
            document.body.classList.remove("fx")
        }
    })
})()