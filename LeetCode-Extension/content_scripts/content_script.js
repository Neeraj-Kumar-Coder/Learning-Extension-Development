chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.message === "HIDE_DIFFICULTY") {
        if (msg.enabled) {
            const divs = Array.from(document.getElementsByTagName("div")).filter((element) => element.hasAttribute("diff"));
            divs.forEach((div) => div.style.display = "none");
        }
        else {
            const divs = Array.from(document.getElementsByTagName("div")).filter((element) => element.hasAttribute("diff"));
            divs.forEach((div) => div.style.display = "block");
        }
    }
    else if (msg.message === "HIDE_CONSTRAINTS") {
        if (msg.enabled) {
            const pElements = Array.from(document.querySelectorAll('p')).filter((p) => p.firstElementChild && p.firstElementChild.tagName === 'STRONG' && p.firstElementChild.textContent === 'Constraints:');
            pElements.forEach((p) => {
                p.style.display = "none";
                p.previousElementSibling.style.display = "none";
                p.nextElementSibling.style.display = "none";
            });
        }
        else {
            const pElements = Array.from(document.querySelectorAll('p')).filter((p) => p.firstElementChild && p.firstElementChild.tagName === 'STRONG' && p.firstElementChild.textContent === 'Constraints:');
            pElements.forEach((p) => {
                p.style.display = "block";
                p.previousElementSibling.style.display = "block";
                p.nextElementSibling.style.display = "block";
            });
        }
    }
    sendResponse();
});