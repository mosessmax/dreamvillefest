import "./style.css";

// $(function () {
//   function format(v) {
//     return v.toString().length == 1 ? "0" + v : v;
//   }

//   const now = new Date();

//   let currentDate = Date.now();
//   now.setTime(now.getTime() + 86400000);
//   const endDateString = now.toISOString();
//   console.log(endDateString);
//   const endDateTime = Date.parse(endDateString);
//   console.log(endDateTime);
//   const endDate = new Date(endDateTime);

//   const $days = $(".days");
//   const $hours = $(".hours");
//   const $mins = $(".minutes");
//   const $secs = $(".seconds");

//   setInterval(function () {
//     currentDate = Date.now();
//     if (currentDate < endDate) {
//       const time = endDate - currentDate;

//       const seconds = Math.floor((time / 1000) % 60);
//       const minutes = Math.floor((time / 60000) % 60);
//       const hours = Math.floor((time / 3600000) % 24);
//       const days = Math.floor(time / 86400000);

//       $secs.text(format(seconds));
//       $mins.text(format(minutes));
//       $hours.text(format(hours));
//       $days.text(days);
//     }
//   }, 100);
// });
