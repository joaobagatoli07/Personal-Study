(function(){
    window.addEventListener("scroll", positionImage)

    const dataParalax = [...document.querySelectorAll("[data-paralax]")]

    function isGettingOut(element){
        return element.getBoundingClientRect().top <= 0
    }

    function getNewPosition(element){
        const dataVelocity = parseFloat(element.getAttribute("data-p-velocity")) || .5
        return element.getBoundingClientRect().top * dataVelocity * -1
    }

    function positionImage(){
        dataParalax.forEach(element => {
            let originalXPosition = getComputedStyle(element).backgroundPositionX
            let originalYPosition = getComputedStyle(element).backgroundPositionY

            if(isGettingOut(element)){
                element.style.backgroundPosition = `${originalXPosition} ${getNewPosition(element)}px`
            }else{
                element.style.backgroundPosition = `${originalXPosition} 0px`
            }
        })
    }

    positionImage()
})()