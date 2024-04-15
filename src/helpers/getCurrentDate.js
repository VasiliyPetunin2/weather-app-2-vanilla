const date = new Date();

const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
};

const dateFormatter = new Intl.DateTimeFormat("ru-RU", options);
let formattedDate = dateFormatter.format(date);

formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

document.querySelector(".real-time-forecast-main-info__date").textContent = formattedDate;
