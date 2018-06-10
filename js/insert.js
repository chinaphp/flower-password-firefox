function insertPassword() {
    browser.tabs.executeScript({
        code: "document.activeElement.value = " + JSON.stringify(document.getElementById("scramble2").value)
    });
    window.close();
}