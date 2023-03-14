import "./style.css";

function format(v: number): string {
  return v.toString().length == 1 ? "0" + v : v.toString();
}

const now: Date = new Date();
const endDate: Date = new Date(now.getTime() + 86400000);

const daysElement: HTMLElement | null = document.querySelector(".days");
const hoursElement: HTMLElement | null = document.querySelector(".hours");
const minutesElement: HTMLElement | null = document.querySelector(".minutes");
const secondsElement: HTMLElement | null = document.querySelector(".seconds");

setInterval(function () {
  const currentDate: number = new Date().getTime();
  if (currentDate < endDate.getTime()) {
    const time: number = endDate.getTime() - currentDate;

    const seconds: number = Math.floor((time / 1000) % 60);
    const minutes: number = Math.floor((time / 60000) % 60);
    const hours: number = Math.floor((time / 3600000) % 24);
    const days: number = Math.floor(time / 86400000);

    if (secondsElement) {
      secondsElement.textContent = format(seconds);
    }
    if (minutesElement) {
      minutesElement.textContent = format(minutes);
    }
    if (hoursElement) {
      hoursElement.textContent = format(hours);
    }
    if (daysElement) {
      daysElement.textContent = days.toString();
    }
  }
}, 100);

/// preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector<HTMLDivElement>(".preloader");
  if (!preloader) {
    return; // or handle the error in some other way
  }
  const count = preloader.querySelector<HTMLSpanElement>(".count")!;
  let loaded = 0;
  const total = document.getElementsByTagName("*").length;
  const interval = setInterval(() => {
    const percent = Math.round((loaded / total) * 100);
    count.innerHTML = percent + "%";
    loaded++;
    if (loaded === total) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    }
  }, 50);

  function checkReadyState() {
    if (document.readyState === "complete") {
      clearInterval(interval);
      count.innerHTML = "100%";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    }
  }

  document.addEventListener("readystatechange", checkReadyState);
});
