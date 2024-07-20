const hideDifficultyLevel = document.getElementById("hideDifficultyLevel");
const hideConstraints = document.getElementById("hideConstraints");

hideDifficultyLevel.addEventListener("click", (e) => {
    const msg = { message: "HIDE_DIFFICULTY", enabled: e.target.checked };

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, msg, (response) => { });
    });
});

hideConstraints.addEventListener("click", (e) => {
    const msg = { message: "HIDE_CONSTRAINTS", enabled: e.target.checked };

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, msg, (response) => { });
    });
});