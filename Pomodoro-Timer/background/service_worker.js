// This will set all the undefined variables in the storage
chrome.storage.local.get(["timer", "isRunning", "focusTime"], (localResult) => {
    chrome.storage.local.set({
        timer: "timer" in localResult ? localResult.timer : (25 * 60),
        isRunning: "isRunning" in localResult ? localResult.isRunning : false,
        focusTime: "focusTime" in localResult ? localResult.focusTime : 25
    });
});

chrome.alarms.create("pomodoro-reverse-timer", {
    periodInMinutes: 1 / 60
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "pomodoro-reverse-timer") {
        chrome.storage.local.get(["timer", "isRunning", "focusTime"], (localResult) => {
            if (localResult.isRunning) {
                let currentTimeLeft = localResult.timer;
                currentTimeLeft--;

                if (currentTimeLeft > 0) {
                    chrome.storage.local.set({
                        timer: currentTimeLeft,
                    });
                }
                else {
                    this.registration.showNotification("Pomodoro Alert", {
                        body: `${localResult.focusTime} minutes focus time is now complete!`,
                        icon: "../icons/icon.png"
                    });

                    chrome.storage.local.set({
                        timer: localResult.focusTime * 60,
                        isRunning: false
                    });
                }
            }
        });
    }
});