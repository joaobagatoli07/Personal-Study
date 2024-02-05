(function () {
    const date = document.querySelector(".hero-content h1 span").innerText

    function getDate(str) {
        const [date, time] = str.split(" ")
        const [day, month, year] = date.split("/")
        const [hour, minute] = time.split("H")
        return new Date(year, month - 1, day, hour, minute)
    }

    const dateEvent = getDate(date)
    const currentDate = new Date()

    let remainingTimeStamp = dateEvent.getTime() - currentDate.getTime()

    const oneMinute = 60 * 1000
    const oneHour = 60 * oneMinute
    const oneDay = 24 * oneHour

    const remainingDays = parseInt(remainingTimeStamp / oneDay)

    remainingTimeStamp -= remainingDays * oneDay

    const remainingHours = parseInt(remainingTimeStamp / oneHour)

    remainingTimeStamp -= remainingHours * oneHour

    const remainingMinutes = parseInt(remainingTimeStamp / oneMinute)

    remainingTimeStamp -= remainingMinutes * oneMinute

    const remainingSeconds = parseInt(remainingTimeStamp / 1000)

    function addRemainingTime(d, h, m, s) {
        const p = document.createElement("p")
        p.textContent = `It's missing ${d} days, ${h} hours, ${m} minutes and ${s} seconds`
        document.querySelector(".hero-content").appendChild(p)
    }

    addRemainingTime(remainingDays, remainingHours, remainingMinutes, remainingSeconds )

})()