const init = () => {
    chrome.storage.sync.get(["hideDifficultyLevel", "hideConstraints", "hideSubmitButton"], (syncResult) => {
        const divsNormalUI = Array.from(document.getElementsByTagName("div")).filter((element) => element.hasAttribute("diff"));
        const divsNewUI = Array.from(document.querySelectorAll('div')).filter(div => div.className.match(/text-difficulty-\w+/));
        divsNormalUI.forEach((div) => div.style.display = syncResult.hideDifficultyLevel ? "none" : "block");
        divsNewUI.forEach((div) => div.style.display = syncResult.hideDifficultyLevel ? "none" : "block");

        const pElements = Array.from(document.querySelectorAll('p')).filter((p) => p.firstElementChild && p.firstElementChild.tagName === 'STRONG' && p.firstElementChild.textContent === 'Constraints:');
        pElements.forEach((p) => {
            p.style.display = syncResult.hideConstraints ? "none" : "block";
            p.previousElementSibling.style.display = syncResult.hideConstraints ? "none" : "block";
            p.nextElementSibling.style.display = syncResult.hideConstraints ? "none" : "block";
        });

        const buttonOldUI = document.querySelector('button[data-cy="submit-code-btn"]');
        if (buttonOldUI)
            buttonOldUI.style.display = syncResult.hideSubmitButton ? "none" : "block";
        const buttonNewUI = document.querySelector('button[data-e2e-locator="console-submit-button"]');
        if (buttonNewUI)
            buttonNewUI.style.display = syncResult.hideSubmitButton ? "none" : "block";
    });
}

const observer = new MutationObserver(init);
observer.observe(document.body, { childList: true, subtree: true });