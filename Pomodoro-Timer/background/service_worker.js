// This will set all the undefined variables in the storage
chrome.storage.local.get(["timer", "isRunning"], (localResult) => {
    chrome.storage.local.set({
        timer: localResult.timer ?? 1500,
        isRunning: localResult.isRunning ?? false
    });
});

chrome.alarms.create("pomodoro-reverse-timer", {
    periodInMinutes: 1 / 60
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "pomodoro-reverse-timer") {
        chrome.storage.local.get(["timer", "isRunning"], (localResult) => {
            if (localResult.isRunning) {
                let currentTimeLeft = localResult.timer;
                currentTimeLeft--;

                if (currentTimeLeft > 0) {
                    chrome.storage.local.set({
                        timer: currentTimeLeft,
                    });
                }
                else {
                    chrome.storage.local.set({
                        timer: 1500,
                        isRunning: false
                    });
                }
            }
        });
    }
});