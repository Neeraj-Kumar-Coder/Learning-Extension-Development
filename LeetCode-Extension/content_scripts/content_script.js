chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.message === "HIDE_DIFFICULTY") {
        const divsNormalUI = Array.from(document.getElementsByTagName("div")).filter((element) => element.hasAttribute("diff"));
        const divsNewUI = Array.from(document.querySelectorAll('div')).filter(div => div.className.match(/text-difficulty-\w+/));
        const tableHeaderDifficulty = Array.from(document.querySelectorAll("div[role='columnheader']")).filter(div => div.firstElementChild && div.firstElementChild.firstElementChild && div.firstElementChild.firstElementChild.innerHTML === "Difficulty");
        const tableRowDifficulty = Array.from(document.querySelectorAll('div[role="cell"]')).filter(div => div.firstElementChild && ["Easy", "Medium", "Hard"].some((difficulty) => div.firstElementChild.innerHTML === difficulty));

        divsNormalUI.forEach((div) => div.style.display = msg.enabled ? "none" : "block");
        divsNewUI.forEach((div) => div.style.display = msg.enabled ? "none" : "block");
        tableHeaderDifficulty.forEach((div) => div.style.display = msg.enabled ? "none" : "block");
        tableRowDifficulty.forEach((div) => div.style.display = msg.enabled ? "none" : "block");
    }
    else if (msg.message === "HIDE_CONSTRAINTS") {
        const pElements = Array.from(document.querySelectorAll('p')).filter((p) => p.firstElementChild && p.firstElementChild.tagName === 'STRONG' && p.firstElementChild.textContent === 'Constraints:');

        pElements.forEach((p) => {
            p.style.display = msg.enabled ? "none" : "block";
            p.previousElementSibling.style.display = msg.enabled ? "none" : "block";
            p.nextElementSibling.style.display = msg.enabled ? "none" : "block";
        });
    }
    else if (msg.message === "HIDE_ACCEPTANCE_RATE") {
        const tableHeaderAcceptance = Array.from(document.querySelectorAll("div[role='columnheader']")).filter(div => div.firstElementChild && div.firstElementChild.firstElementChild && div.firstElementChild.firstElementChild.innerHTML === "Acceptance");
        const tableRowAcceptance = Array.from(document.querySelectorAll('div[role="cell"]')).filter(div => div.firstElementChild && div.firstElementChild.innerHTML.match(/^\d+\.\d+%/));
        const descriptionContentDivOldUI = document.querySelector('div[data-key="description-content"]');

        tableHeaderAcceptance.forEach((div) => div.style.display = msg.enabled ? "none" : "block");
        tableRowAcceptance.forEach((div) => div.style.display = msg.enabled ? "none" : "block");
        descriptionContentDivOldUI.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.style.display = msg.enabled ? "none" : "block";
    }
    else if (msg.message === "HIDE_SUBMIT_BUTTON") {
        const buttonOldUI = document.querySelector('button[data-cy="submit-code-btn"]');
        if (buttonOldUI)
            buttonOldUI.style.display = msg.enabled ? "none" : "block";

        const buttonNewUI = document.querySelector('button[data-e2e-locator="console-submit-button"]');
        if (buttonNewUI)
            buttonNewUI.style.display = msg.enabled ? "none" : "block";
        console.log(buttonNewUI);
    }

    sendResponse();

    return true;
});