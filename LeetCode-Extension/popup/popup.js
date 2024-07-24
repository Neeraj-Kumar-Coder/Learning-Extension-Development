const hideDifficultyLevel = document.getElementById("hideDifficultyLevel");
const hideConstraints = document.getElementById("hideConstraints");
const hideAcceptanceRate = document.getElementById("hideAcceptanceRate");
const hideSubmitButton = document.getElementById("hideSubmitButton");

chrome.storage.sync.get(["hideDifficultyLevel", "hideConstraints", "hideAcceptanceRate", "hideSubmitButton"], (syncResult) => {
    hideDifficultyLevel.checked = syncResult.hideDifficultyLevel ?? false;
    hideConstraints.checked = syncResult.hideConstraints ?? false;
    hideAcceptanceRate.checked = syncResult.hideAcceptanceRate ?? false;
    hideSubmitButton.checked = syncResult.hideSubmitButton ?? false;
});

hideDifficultyLevel.addEventListener("click", (e) => {
    const msg = { message: "HIDE_DIFFICULTY", enabled: e.target.checked };

    chrome.storage.sync.set({ "hideDifficultyLevel": e.target.checked });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, msg, (response) => { });
    });
});

hideConstraints.addEventListener("click", (e) => {
    const msg = { message: "HIDE_CONSTRAINTS", enabled: e.target.checked };

    chrome.storage.sync.set({ "hideConstraints": e.target.checked });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, msg, (response) => { });
    });
});

hideAcceptanceRate.addEventListener("click", (e) => {
    const msg = { message: "HIDE_ACCEPTANCE_RATE", enabled: e.target.checked };

    chrome.storage.sync.set({ "hideAcceptanceRate": e.target.checked });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, msg, (response) => { });
    });
});

hideSubmitButton.addEventListener("click", (e) => {
    const msg = { message: "HIDE_SUBMIT_BUTTON", enabled: e.target.checked };

    chrome.storage.sync.set({ "hideSubmitButton": e.target.checked });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, msg, (response) => { });
    });
})