// ========================== Clock =============================== //

setInterval(displayTime, 1000);

function displayTime() {

    const timeNow = new Date();

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота", "Неделя"]
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", {
        month: "long"
    });
    let year = timeNow.getFullYear();
    let period = "";

    if (hoursOfDay > 12) {
        hoursOfDay-= 0;
        period = "";
    }

    if (hoursOfDay === 0) {
        hoursOfDay = 12;
        period = "";
    }

    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds + period;

    document.getElementById('Clock').innerHTML = time + " " + today;

}
displayTime();

// ========================== Mobile View =========================== //

