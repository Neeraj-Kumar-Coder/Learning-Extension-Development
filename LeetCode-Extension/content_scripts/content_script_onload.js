const init = () => {
    chrome.storage.sync.get(["hideDifficultyLevel", "hideConstraints"], (syncResult) => {
        if (syncResult.hideDifficultyLevel) {
            const divsNormalUI = Array.from(document.getElementsByTagName("div")).filter((element) => element.hasAttribute("diff"));
            divsNormalUI.forEach((div) => div.style.display = "none");
            const divsNewUI = Array.from(document.querySelectorAll('div')).filter(div => div.className.match(/text-difficulty-\w+/));
            divsNewUI.forEach((div) => div.style.display = "none");
        }
        else {
            const divs = Array.from(document.getElementsByTagName("div")).filter((element) => element.hasAttribute("diff"));
            divs.forEach((div) => div.style.display = "block");
        }


        if (syncResult.hideConstraints) {
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
    });
}

const observer = new MutationObserver(init);
observer.observe(document.body, { childList: true, subtree: true });