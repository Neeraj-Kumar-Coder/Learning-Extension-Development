chrome.alarms.create("timer-alarm", {
    periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.local.get(["timer", "isRunning"], (localResult) => {
        const isRunning = localResult.isRunning ?? true;
        if (!isRunning) return;

        chrome.storage.sync.get(["interval"], (syncResult) => {
            const interval = syncResult.interval ?? -1;
            const timer = localResult.timer ?? 0;
            chrome.storage.local.set({ timer: timer + 1 });

            if (interval !== -1 && (timer + 1) % interval === 0)
                this.registration.showNotification("Chrome timer extension", {
                    body: `${interval} seconds have passed!`,
                    icon: "../icons/icon-64.png",
                });
        });
    });
});
