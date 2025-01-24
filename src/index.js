import "./reset.css";
import "./style.css";
import * as elementManipulator from "./modules/element-manipulator.js";
import { createBanner } from "./modules/create-banner.js";
import * as changeTab from "./modules/change-tabs.js";

// Immediately load the home tab and mark its tab along with loading the other tabs
window.onload = changeTab.initialPageLoad();

// Simply add up to 6 desired messages
createBanner(
    "This Week's Special: Cheery Coca Cola Float",
    "Visit the Grand Opening of the Henderson Branch this Tuesday",
    "New Menu Item: Bread Pudding"
)

// Dark and light mode logic
document.querySelector(".appearance-modes").addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList[0] == "light-icon") {
        elementManipulator.changeToLight();
    }

    if (target.classList[0] == "dark-icon") {
        elementManipulator.changeToDark();
    }
});


// Main tab changing logic
document.querySelector(".nav-cont").addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList[target.classList.length - 1] == 'active') {
        console.log("already active");
        return;
    }

    else if (target.classList[0] == 'tab-button') {
        changeTab.markTab(target);
        changeTab.changeToTab(target.classList[1]);
    }
});