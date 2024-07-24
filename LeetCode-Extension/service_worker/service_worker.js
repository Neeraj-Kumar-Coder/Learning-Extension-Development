chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.storage.sync.set({
            "hideDifficultyLevel": false,
            "hideConstraints": false,
            "hideAcceptanceRate": false,
            "hideSubmitButton": false
        });
    }
});
