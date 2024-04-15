export const generateSlideHTML = (forecastType, slideData) => {
    if (forecastType === "hourlyForecast") {
        return `
        <article class="slide">
            <p class="slide__text-info">${slideData.time}</p>
            <img src="${slideData.imgPath}" alt="Изображение осадков" class="slide__precipitation" />
            <p class="slide__text-info">${slideData.temp}°</p>
        </article>`;
    }

    if (forecastType === "weeklyForecast") {
        return `
        <article class="slide">
            <p class="slide__text-info">${slideData.date}</p>
            <img src="${slideData.imgPath}" alt="Изображение осадков" class="slide__precipitation" />
            <p class="slide__text-info">от ${slideData.minTemp}° до ${slideData.maxTemp}°</p>
        </article>`;
    }
};
