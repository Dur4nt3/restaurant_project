export function createBanner(...bannerContent) {
    for (let i in bannerContent) {
        // Prevent bloating by limiting the amount of messages
        if (i == 6) {
            console.log("Exceeded Maximum Messages");
            break;
        }

        const bannerMsg = document.createElement("p");
        bannerMsg.textContent = bannerContent[i];
        bannerMsg.classList.add("banner-content");
        const bannerCont = document.querySelector(".scrolling-banner");
        bannerCont.appendChild(bannerMsg);
    }

    // Ensure messages are not going too fast if you have a lot of them
    if (bannerContent.length >= 6) {
        document.querySelector(":root").style.setProperty('--scroll-speed', '45s');
    }
}