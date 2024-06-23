chrome.alarms.create("timer-alarm", {
    periodInMinutes: 1 / 60
});

chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.local.get(["timer"], (result) => {
        chrome.storage.sync.get(["interval"], (syncResult) => {
            const interval = syncResult.interval ?? -1;
            const time = result.timer ?? 0;
            chrome.storage.local.set({ timer: time + 1 });

            if (interval !== -1 && (time + 1) % interval === 0)
                this.registration.showNotification("Chrome timer extension", {
                    body: `${interval} seconds have passed!`,
                    icon: "../icons/icon-64.png"
                })
        })
    });
});