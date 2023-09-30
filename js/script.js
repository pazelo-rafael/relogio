const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");

const getTime = () => {
    const date = new Date();
    return {
        horas: date.getHours(),
        minutos: date.getMinutes(),
        segundos: date.getSeconds(),
    };
};

setInterval(() => {
    const { segundos, minutos, horas } = getTime();
    segundos.style.transform = `translate(0, -50%) rotate(${segundos * 6}deg)`;
    minutos.style.transform = `translate(0, -50%) rotate(${minutos * 6}deg)`;
    horas.style.transform = `translate(0, -50%) rotate(${horas * 30}deg)`;
}, 1000);
