console.log(`hello from background.js`);

console.log(this);

let time = 0;

// setInterval(() => {
//   time += 1000;
//   console.log(`time is ${time}`);
// }, 1000);

chrome.alarms.create("alarm1", {
  periodInMinutes: 5 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  time += 1;
  //   console.log(`time is ${time}`);
  chrome.storage.sync.set({ time }, () => {
    console.log(`In background.js - Time has been set to ${time}`);
  });
  chrome.action.setBadgeText({ text: `X${time}` }, () => {
    console.log("Setting badge 123");
  });
  if (time % 2 == 0) {
    this.registration.showNotification("Timer Notify 123", {
      body: `Time has been set to ${time}`,
      icon: "action_icon.png",
    });
  }
});
