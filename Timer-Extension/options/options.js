const nameInput = document.getElementById("name");
const intervalInput = document.getElementById("notificationInterval");
const saveBtn = document.getElementById("save");

saveBtn.addEventListener("click", (event) => {
    const name = nameInput.value;
    const interval = intervalInput.value;
    const data = { name, interval };
    chrome.storage.sync.set(data, () => {
        console.log(`Saved data is ${data}`);
    });
    alert(`Saved ${JSON.stringify(data)}`);
});

chrome.storage.sync.get(["name", "interval"], (result) => {
    nameInput.value = result.name ?? "";
    intervalInput.value = result.interval ?? "";
});
