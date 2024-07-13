const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const addTaskBtn = document.getElementById("add-task-btn");
const tasksContainer = document.getElementById("tasks-container");

let tasks = [];
chrome.storage.sync.get(["tasks"], (syncResult) => {
    tasks = syncResult.tasks ?? [];
    renderTasks();
});

const saveTasks = () => {
    chrome.storage.sync.set({ tasks });
}

const addTask = () => {
    tasks.push("");
    saveTasks();
    renderTasks();
}

const removeTasks = (index) => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

const updateTask = (event, index) => {
    tasks[index] = event.target.value;
    saveTasks();
}

const renderTasks = () => {
    tasksContainer.innerHTML = "";

    tasks.map((task, index) => {
        const taskNumber = document.createElement("h3");
        taskNumber.innerText = `Task #${index + 1}`;

        const textField = document.createElement("input");
        textField.type = "text";
        textField.value = task;
        textField.addEventListener("change", (e) => { updateTask(e, index) });
        textField.classList.add("task-text");

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.classList.add("btn", "remove-btn");
        removeBtn.addEventListener("click", () => removeTasks(index));

        const individualTask = document.createElement("div");
        individualTask.appendChild(taskNumber);
        individualTask.appendChild(textField);
        individualTask.appendChild(removeBtn);
        individualTask.classList.add("individual-task");

        tasksContainer.appendChild(individualTask);
    });
}

renderTasks();

addTaskBtn.addEventListener("click", addTask);