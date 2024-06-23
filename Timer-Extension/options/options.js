const nameInput = document.getElementById("name");
const intervalInput = document.getElementById("notificationInterval");
const saveBtn = document.getElementById("save");

saveBtn.addEventListener("click", (event) => {
    const name = nameInput.value;
    const interval = intervalInput.value;
    chrome.storage.sync.set({ name, interval }, () => { console.log(`Saved data is ${{ name, interval }}`) })
});

chrome.storage.sync.get(["name", "interval"], (result) => {
    nameInput.value = result.name ?? "";
    intervalInput.value = result.interval ?? "";
});