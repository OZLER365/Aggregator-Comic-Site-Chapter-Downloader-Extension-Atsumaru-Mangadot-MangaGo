# 📖 Atsumaru, Mangadot & MangaGo Comic Downloader

A cross-browser extension to seamlessly download chapter images from popular manga aggregator sites. It packages the downloaded images into a **Native ZIP file** right within the browser. 

> **Stores Status:**
> * **Firefox Add-ons:** [Install on Firefox Add-ons](https://addons.mozilla.org/en-US/android/addon/atsumangadotmangagodownloader/)
> * **Edge Add-ons:** [Install on Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/atsumaru-mangadot-mangago/bngfpihjnbbchghmdbmdfefjejjddnhe)

---

## ✨ Features

- **Native ZIP Generation:** Compiles downloaded images into a standard `.zip` file on the fly using binary processing (no external dependencies required).
- **SPA Ready:** Built to handle Single Page Applications smoothly. It continuously monitors URL changes and DOM updates to keep the download button ready.
- **Cross-Browser & Mobile Support:** Fully compatible with Chromium-based browsers (Chrome, Edge, Brave) and Firefox. Includes optimized floating UI for mobile browsers.
- **Network Interception Bypass:** Uses a clever injection script to intercept `fetch` and `XMLHttpRequest` responses, directly extracting high-quality image URLs from the site's internal API before they reach the DOM.
- **CORS Bypass:** Employs Manifest V3 background service workers to fetch images securely without Cross-Origin Resource Sharing restrictions.

## 🌐 Supported Sites

- `*.atsu.moe` (Atsumaru)
- `*.mangadot.net` (Mangadot)
- `*.mangago.me` & `*.mangago.zone` (MangaGo)

---

## 🚀 Manual Installation (Developer Mode)

Since the extension is currently pending store approval, you can install it manually using Developer Mode.

### For Chrome, Edge, and Chromium Browsers
1. Download the extension source code and extract it into a folder.
2. Open your browser and navigate to the extensions page:
   - **Chrome/Brave:** `chrome://extensions/`
   - **Edge:** `edge://extensions/`
3. Toggle **"Developer mode"** on (usually found in the top right corner).
4. Click the **"Load unpacked"** button.
5. Select the folder where you extracted the extension files.
6. The extension is now installed and ready to use!

### For Firefox
1. Download the extension source code and extract it into a folder.
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Click the **"Load Temporary Add-on..."** button.
4. Select the `manifest.json` file from your extracted folder.
5. The extension is now active for your current session. *(Note: Temporary add-ons are removed when Firefox restarts. For permanent installation of unpacked extensions, Firefox Developer Edition is recommended).*

---

## 🔗 Links & Resources

* 🌐 **My Website & Repositories:** [ozler365.github.io](https://ozler365.github.io/ozler-s-works-info/#/repositories)
* 📜 **Userscript Version:** Available on [GreasyFork](https://greasyfork.org/en/scripts/595572-aggregator-comic-site-chapter-downloader-atsumaru-mangadot-mangago) (Tampermonkey recommended)
* ☕ **Support my work:** [Buy Me a Coffee - ozler](https://buymeacoffee.com/ozler)

## 💬 Contact & Feedback

For queries, bug reports, or feature requests:
- **Email:** devjk6918@gmail.com
- **Review:** Drop a review on the GreasyFork page!

---

**⚠️ Disclaimer:**  
*This extension is strictly for educational purposes. Please do not repost or redistribute the downloaded images. Support the original creators and platforms where possible.*
