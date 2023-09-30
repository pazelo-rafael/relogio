const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const getTime = () => {
    const date = new Date();
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
};

setInterval(() => {
    const { seconds, minutes, hours } = getTime();
    seconds.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    minutes.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    hours.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;
}, 1000);
