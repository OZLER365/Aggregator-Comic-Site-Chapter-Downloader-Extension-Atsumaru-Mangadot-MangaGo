(function() {
    function findPages(obj) {
        if (!obj) return null;
        if (obj.readChapter && obj.readChapter.pages) return obj.readChapter.pages;
        if (typeof obj === 'object') {
            for (let key in obj) {
                if (obj[key] && typeof obj[key] === 'object') {
                    let res = findPages(obj[key]);
                    if (res) return res;
                }
            }
        }
        return null;
    }

    const origFetch = window.fetch;
    window.fetch = async function(...args) {
        const response = await origFetch.apply(this, args);
        try {
            const clone = response.clone();
            clone.json().then(data => {
                // Atsumaru check
                const pages = findPages(data);
                if (pages && pages.length > 0) {
                    let extractedChId = "unknown";
                    const firstEntry = pages[0];
                    const urlStr = typeof firstEntry === 'string' ? firstEntry : (firstEntry.url || firstEntry.src || firstEntry.path || Object.values(firstEntry).find(v => typeof v === 'string' && v.includes('/static/')));
                    if (urlStr) {
                        const match = urlStr.match(/\/pages\/([^/]+)\//);
                        if (match) extractedChId = match[1];
                    }
                    window.postMessage({ type: 'ATSU_PAGES', pages: pages, chapterId: extractedChId }, '*');
                }
                
                // Mangadot check
                if (data && data.chapter && data.chapter.id && Array.isArray(data.images)) {
                    window.postMessage({ type: 'MANGADOT_PAGES', pages: data.images, chapterId: data.chapter.id.toString() }, '*');
                }
            }).catch(e => {});
        } catch(e) {}
        return response;
    };

    const origSend = window.XMLHttpRequest.prototype.send;
    window.XMLHttpRequest.prototype.send = function(...args) {
        this.addEventListener('load', function() {
            try {
                if (this.responseText && this.responseText.includes('"images":[')) {
                    const data = JSON.parse(this.responseText);
                    if (data && data.chapter && data.chapter.id && Array.isArray(data.images)) {
                        window.postMessage({ type: 'MANGADOT_PAGES', pages: data.images, chapterId: data.chapter.id.toString() }, '*');
                    }
                }
            } catch (e) {}
        });
        return origSend.apply(this, args);
    };
})();