(function () {
    window.addEventListener("scroll", markScroll)

    const nav = document.querySelector(".nav")
    const links = nav.querySelectorAll("li a")


    function markScroll() {
        let positions = [...links].map(link => {
            console.log(link)
            console.log(link.href)
        })

        positions
    }

    markScroll()
})()