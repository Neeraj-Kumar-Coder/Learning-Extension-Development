const nameInput = document.getElementById("name");
const saveBtn = document.getElementById("save");

saveBtn.addEventListener("click", (event) => {
    const name = nameInput.value;
    chrome.storage.sync.set({ name }, () => { console.log(`Name is saved as ${name}`) })
});

chrome.storage.sync.get(["name"], (result) => {
    nameInput.value = result.name ?? "";
})