const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const currentTime = new Date().toLocaleTimeString();

timeElement.textContent = `The time now is ${currentTime}`;

// chrome.action.setBadgeText({ text: "WOW" }, () => {
//   console.log("Setting badge 123");
// });

chrome.storage.sync.get(["name", "test"], (res) => {
  const name = res.name ?? "No name";
  nameElement.innerText = `Your name is ${name}`;
  console.log(`Retrieved name : ${name}`);
});

setInterval(() => {
  chrome.storage.sync.get(["time", "test"], (res) => {
    const time = res.time ?? "No time";
    timeElement.innerText = `Your time is ${time}`;
    console.log(`Retrieved time : ${time}`);
  });
}, 1000);

// console.log(this);

// setInterval(() => {
//   const currentTime = new Date().toLocaleTimeString();
//   timeElement.textContent = `The time now is ${currentTime}`;
// }, 1000);
