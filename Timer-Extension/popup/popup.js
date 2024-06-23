const timeElement = document.getElementById("currentTime");
const timerElement = document.getElementById("timer");

chrome.storage.sync.get(["name"], (syncResult) => {
    const name = syncResult.name ?? "Stranger";

    setInterval(() => {
        chrome.storage.local.get(["timer"], (localResult) => {
            const timer = localResult.timer ?? 0;

            const currentTime = new Date().toLocaleTimeString();
            timeElement.textContent = `Hello ${name}, the current time is: ${currentTime}`;
            timerElement.textContent = `The timer is at: ${timer} seconds`;
        })
    }, 1000);
})

chrome.action.setBadgeText({
    text: "TIME"
}, () => { console.log("Finished setting badge!") });