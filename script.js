function getLiveTimeAndDate() {

    const date = document.getElementById("date")
    const time = document.getElementById("time")

    const hours = new Date().liveHour()
    const minutes = newDate().liveMinute()

    time.textContent = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

    const dayOptions = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const dayIndex = currentDate.getDay();
      const day = dayOptions[dayIndex];

    date.textContent = `${day}`;
}

setInterval(getLiveTimeAndDate, 1000);

getLiveTimeAndDate();
