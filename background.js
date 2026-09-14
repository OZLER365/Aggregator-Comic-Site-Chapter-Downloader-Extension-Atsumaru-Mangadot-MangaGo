chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        chrome.tabs.create({ url: "https://ozler365.github.io/ozler-s-works-info/#/home" });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchBlob") {
        fetch(request.url, {
            referrer: request.referer || ""
        })
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.blob();
            })
            .then(blob => {
                const reader = new FileReader();
                reader.onloadend = () => sendResponse({ success: true, data: reader.result });
                reader.onerror = () => sendResponse({ success: false, error: "FileReader failed" });
                reader.readAsDataURL(blob);
            })
            .catch(err => sendResponse({ success: false, error: err.message }));
        return true; 
    }
});