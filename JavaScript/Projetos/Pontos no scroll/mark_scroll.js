(function () {
    window.addEventListener("scroll", markScroll)

    const nav = document.querySelector(".nav")
    const links = nav.querySelectorAll("li a")

    function markScroll() {
        let positions = [...links].map(link => {
            let href = link.getAttribute("href")
            let h2 = document.querySelector(href)

            return h2.getBoundingClientRect().top
        })

        let activeLink = getLastViewedElement(positions)

        let activedNav = nav.querySelector(".actived")

        if (activedNav) {
            activedNav.classList.remove("actived")
        }

        if (activeLink) {
            activeLink.classList.add("actived")
        }else{
            links[0].classList.add("actived")
        }
    }

    function getLastViewedElement(ArrPositions) {
        let _positions = ArrPositions.filter(n => n < innerHeight / 2)
        return links[_positions.length - 1]
    }

    markScroll()
})()