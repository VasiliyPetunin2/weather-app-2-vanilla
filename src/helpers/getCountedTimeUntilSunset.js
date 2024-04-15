export const calculateRemainingTime = (initialTime) => {
    const [initialHour, initialMinute] = initialTime.split(":").map(Number);

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    let hourDiff = 23 - currentHour + initialHour;
    let minuteDiff = 59 - currentMinute + initialMinute;

    if (minuteDiff >= 60) {
        minuteDiff -= 60;
        hourDiff += 1;
    }
    if (hourDiff >= 24) {
        hourDiff -= 24;
    }

    const remainingHour = String(hourDiff).padStart(2, "0");
    const remainingMinute = String(minuteDiff).padStart(2, "0");

    return `${remainingHour}:${remainingMinute}`;
};
