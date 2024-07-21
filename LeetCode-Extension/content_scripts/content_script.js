chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.message === "HIDE_DIFFICULTY") {
        const divsNormalUI = Array.from(document.getElementsByTagName("div")).filter((element) => element.hasAttribute("diff"));
        const divsNewUI = Array.from(document.querySelectorAll('div')).filter(div => div.className.match(/text-difficulty-\w+/));

        divsNormalUI.forEach((div) => div.style.display = msg.enabled ? "none" : "block");
        divsNewUI.forEach((div) => div.style.display = msg.enabled ? "none" : "block");
    }
    else if (msg.message === "HIDE_CONSTRAINTS") {
        const pElements = Array.from(document.querySelectorAll('p')).filter((p) => p.firstElementChild && p.firstElementChild.tagName === 'STRONG' && p.firstElementChild.textContent === 'Constraints:');

        pElements.forEach((p) => {
            p.style.display = msg.enabled ? "none" : "block";
            p.previousElementSibling.style.display = msg.enabled ? "none" : "block";
            p.nextElementSibling.style.display = msg.enabled ? "none" : "block";
        });
    }
    else if (msg.message === "HIDE_SUBMIT_BUTTON") {
        const button = document.querySelector('button[data-cy="submit-code-btn"]');
        button.style.display = msg.enabled ? "none" : "block";
    }
    sendResponse();
});