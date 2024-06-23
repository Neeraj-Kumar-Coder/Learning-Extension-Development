const timeElement = document.getElementById("currentTime");

chrome.storage.sync.get(["name"], (result) => {
    const name = result.name ?? "Stranger";
    setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        timeElement.textContent = `Hello ${name}, the current time is: ${currentTime}`;
    }, 1000);
})

chrome.action.setBadgeText({
    text: "TIME"
}, () => { console.log("Finished setting badge!") });